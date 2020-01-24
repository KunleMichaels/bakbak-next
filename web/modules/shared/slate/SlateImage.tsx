import IconButton from "@material-ui/core/IconButton";
import { useEditor } from "slate-react";
import { Transforms } from "slate";
import imageExtensions from "image-extensions";
import isUrl from "is-url";
import { MAX_IMAGE_SIZE } from "../../../../common";
import { imageUpload } from "../../util/ImageUpload";
import { useUploadImageMutation } from "../../../../controller";

export const withSlateImages = (editor: any) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element: any) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data: any) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });
          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor: any, url: any) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
};

export const ImageElement = ({ attributes, children, element }: any) => {
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          style={{
            maxHeight: MAX_IMAGE_SIZE.HEIGHT,
            maxWidth: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </div>
      {children}
    </div>
  );
};

export const InsertImageButton = ({ icon }: any) => {
  const editor = useEditor();
  const [uploadImageMutation] = useUploadImageMutation();

  const fileSelectHandler = async (event: any) => {
    const file = event.target.files[0];
    const url = await imageUpload(file, uploadImageMutation);
    if (url) {
      insertImage(editor, url);
    }
  };
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-image"
        type="file"
        onChange={fileSelectHandler}
      />
      <label htmlFor="upload-image">
        <IconButton component="span">{icon}</IconButton>
      </label>
    </>
  );
};

const isImageUrl = (url: any) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext as string);
};
