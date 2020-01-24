import { FormControl, FormHelperText } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FieldAttributes, useField } from "formik";
import isHotkey from "is-hotkey";
import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import {
  HOTKEYS,
  SlateLeaf,
  SlateElement,
  toggleMark
} from "./SlateEditorUtil";
import Paper from "@material-ui/core/Paper";

import { SlateToolbar } from "./SlateToolbar";
import { withLinks } from "./SlateLinks";
import { withSlateImages } from "./SlateImage";

// import Paper from "@material-ui/core/Paper";

interface Props {
  initValue: any;
  required: boolean;
  fullWidth: boolean;
  label?: string;
  placeholder?: string;
  textContainerStyle?: any;
}

export const SlateInputField: React.SFC<FieldAttributes<any> & Props> = ({
  initValue,
  required,
  fullWidth,
  placeholder,
  textContainerStyle,
  ...props
}) => {
  const [field, meta, helpers] = useField<{}>(props);
  const { setValue } = helpers;

  const classes = useStyles();
  const [slateValue, setSlateValue] = useState(JSON.parse(initValue));
  const editor = useMemo(
    () => withSlateImages(withLinks(withHistory(withReact(createEditor())))),
    []
  );

  const renderElement = useCallback((props) => <SlateElement {...props} />, []);
  const renderLeaf = useCallback((props) => <SlateLeaf {...props} />, []);

  const errorMessage = meta.touched && meta.error ? meta.error : "";
  return (
    <FormControl
      className={classes.formControl}
      error={Boolean(errorMessage)}
      required={required}
      fullWidth={fullWidth}
    >
      <Paper elevation={2} className={classes.paper}>
        <Slate
          editor={editor}
          value={slateValue}
          onChange={(value: any) => {
            setSlateValue(value);
            setValue(JSON.stringify(value));
          }}
        >
          <SlateToolbar />
          <Editable
            id={field.name}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            renderElement={renderElement}
            onKeyDown={(event: any) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
            style={{ ...textContainerStyle }}
          />
        </Slate>
        <FormHelperText id={`${field.name}-error-text`}>
          {errorMessage}
        </FormHelperText>
      </Paper>
    </FormControl>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginBottom: theme.spacing(5),
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "red"
  },
  paper: {
    border: `2px solid ${theme.palette.divider}`
  }
}));
