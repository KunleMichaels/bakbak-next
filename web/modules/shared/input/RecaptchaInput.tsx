import { FormControl, FormHelperText } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FieldAttributes, useField } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const RecaptchaInput: React.SFC<FieldAttributes<any>> = (props: any) => {
  const [field, meta, helpers] = useField<{}>(props);
  const { setValue } = helpers;
  const [, setRecaptchaSuccess] = useState(false);
  const classes = useStyles();

  const verifyRecaptcha = (_: any) => {
    setRecaptchaSuccess(true);
    setValue(true);
  };

  const errorMessage = meta.touched && meta.error ? meta.error : "";
  return (
    <FormControl className={classes.formControl} error={Boolean(errorMessage)}>
      <ReCAPTCHA
        id={field.name}
        sitekey={process.env.GOOGLE_CAPTCHA_KEY}
        onChange={verifyRecaptcha}
        size="normal"
      />
      <FormHelperText id={`${field.name}-error-text`}>
        {errorMessage}
      </FormHelperText>
    </FormControl>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    marginBottom: theme.spacing(1)
  }
}));
