import Resizer from "react-image-file-resizer";
import { MAX_IMAGE_SIZE, IMAGE_SERVER_URL } from "../../../common";

export const imageUpload = async (file: File, uploadImageMutation: any) => {
  const result: any = await new Promise((resolve) => {
    Resizer.imageFileResizer(
      file, //is the file of the new image that can now be uploaded...
      MAX_IMAGE_SIZE.WIDTH, // is the maxWidth of the  new image
      MAX_IMAGE_SIZE.HEIGHT, // is the maxHeight of the  new image
      file.type.split("/")[1], // is the compressFormat of the  new image
      100, // is the quality of the  new image
      0, // is the rotatoion of the  new image
      async (uri: any) => {
        var newFile = new File([uri], file.name);
        const { data } = await uploadImageMutation({
          variables: { input: { picture: newFile } }
        });
        if (data?.uploadImage && data?.uploadImage.filename) {
          const url = `${IMAGE_SERVER_URL}${encodeURI(
            data.uploadImage.filename
          )}`;
          resolve(url);
        } else {
          resolve(null);
        }
      }, // is the callBack function of the new image URI
      "blob" // is the output type of the new image
    );
  });
  return result;
};
