import { FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FieldAttributes, useField } from "formik";
import React from "react";

interface Props {
  prefix: React.ReactNode;
  label?: string;
  required: boolean;
  fullWidth: boolean;
} 

const InputField: React.SFC<FieldAttributes<any> & Props> = ({
  prefix,
  label,
  required,
  fullWidth,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorMessage = meta.touched && meta.error ? meta.error: '';
  const classes = useStyles({});
  return (
    <FormControl
      className={classes.formControl}
      error={Boolean(errorMessage)}
      required={required}
      fullWidth={fullWidth}
    >
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <Input
        id={field.name}
        aria-describedby={`${field.name}-error-text`}
        {...field}
        {...props}
        
      />
      <FormHelperText id={`${field.name}-error-text`}>
        {errorMessage}
      </FormHelperText>
    </FormControl>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginBottom: theme.spacing(1)
  }
}));

export default InputField;
