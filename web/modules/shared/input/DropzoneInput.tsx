import { FieldProps } from "formik";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";
import { imageUpload } from "../../util/ImageUpload";
import { useUploadImageMutation } from "../../../../controller";

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

export const DropzoneInput: React.SFC<FieldProps<any>> = (props) => {
  const {
    field,
    form: { setFieldValue } // also values, setXXXX, handleXXXX, dirty, isValid,
  } = props;
  const [files, setFiles] = useState();
  const classes = useStyles();
  const [uploadImageMutation] = useUploadImageMutation();

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
      });
      setFiles(newFile);
      const imageUrl = await imageUpload(newFile, uploadImageMutation);
      if (imageUrl) {
        setFieldValue(field.name, imageUrl);
      }
    }
  });

  const thumbs = files && (
    <>
      <div style={{ marginRight: 5 }}>Preview</div>
      <div style={thumb} key={files.name}>
        <div style={thumbInner}>
          <img src={files.preview} style={img} />
        </div>
      </div>
    </>
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files && URL.revokeObjectURL(files.preview);
    },
    [files]
  );

  return (
    <section className={classes.container}>
      <div {...getRootProps({ className: classes.inputContainer })} {...props}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop Image here, or click to select Image</p>
      </div>
      <aside className={classes.thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: 2,
    border: "1px solid #eaeaea",
    width: "100%",
    minHeight: theme.spacing(15),
    marginBottom: theme.spacing(5),
    backgroundColor: theme.palette.common.white
  },
  inputContainer: {
    borderRadius: 2,
    border: "1px dotted black",
    minHeight: theme.spacing(5),
    marginBottom: theme.spacing(5),
    backgroundColor: grey[200],
    margin: theme.spacing(3),
    display: "flex",
    justifyContent: "center"
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: theme.spacing(3),
    justifyContent: "center"
  }
}));
