import * as React from "react";
import { useEffect, useState } from "react";

export interface ImageProps {
  node: any;
  attributes: any;
}

export const Image: React.FunctionComponent<ImageProps> = props => {
  const [src, setSrc] = useState<ArrayBuffer | string | null>(
    props.node.data.get("src") || ""
  );

  // this is similar componentDidMount
  useEffect(() => {
    const droppedFile = props.node.data.get("file") || {};
    load(droppedFile);
  }, []);

  const load = (file: any) => {
    const reader = new FileReader();

    // After an image is dropped, this ensures it doesn't fail
    // if user tries to drag the image somewhere else:
    // if (file.name === undefined) return;
    reader.addEventListener("load", () => setSrc(reader.result));
    reader.readAsDataURL(file);
  };

  const { attributes } = props;

  // when dropping:
  // - for existing inline images: it copies them instead of moving them
  // - for exiting blocks, it removes them
  if (src) {
    return <img {...attributes} src={src.toString()} />;
  }
  return null;
};
