import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ROUTE_NAMES, userValidationSchema } from "../../../../common";
import {
  normalizedErrors,
  RegisterInput,
  User,
  UserPayload
} from "../../../../controller";
import { filter } from "../../util/BadWords";
import InputField from "../../shared/input/InputField";
import { PasswordInput } from "../../shared/input/PasswordInput";
import { OptionButtons } from "../../shared/OptionButtons";
import { Typography } from "@material-ui/core";

interface Props {
  submit: (values: RegisterInput) => Promise<UserPayload | null>;
  onComplete: (user: User) => void;
}

export const RegisterUserView = (props: Props) => {
  const classes = useStyles({});
  const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);
  const verifyRecaptcha = (_: any) => {
    setRecaptchaSuccess(true);
  };
  const onSubmit = async (
    values: RegisterInput,
    { setErrors, setSubmitting }: FormikHelpers<RegisterInput>
  ) => {
    const response = await props.submit(values);
    if (response) {
      if (response.user) {
        setSubmitting(false);
        props.onComplete(response.user);
      } else if (response.errors) {
        setErrors(normalizedErrors(response.errors));
        setSubmitting(false);
      }
    }
  };

  const validate = (values: RegisterInput) => {
    const errors: any = {};
    if (filter.isProfane(values.email)) {
      errors.email = "No profane or reserved words allowed";
    }
    if (filter.isProfane(values.userName)) {
      errors.userName = "No profane or reserved words allowed";
    }
    if (!recaptchaSuccess) {
      errors.password = "Complete the Recaptcha";
    }
    return errors;
  };
  return (
    <div className={classes.form}>
      <Typography variant="h5" style={{ marginRight: 30 }}>
        Register as
      </Typography>
      <Formik
        initialValues={{ email: "", userName: "", password: "" }}
        validate={validate}
        validationSchema={userValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="email"
              label="Email Address"
              autoComplete="email"
              required={true}
              autoFocus={true}
              fullWidth={true}
              as={InputField}
            />
            <Field
              name="userName"
              label="user name"
              autoComplete="username"
              required={true}
              fullWidth={true}
              as={InputField}
            />
            <PasswordInput />
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_CAPTCHA_KEY}
              onChange={verifyRecaptcha}
              size="normal"
            />
            <OptionButtons
              isSubmitting={isSubmitting}
              primaryLabel="Register"
              secondaryLabel="Login"
              secondaryHref={ROUTE_NAMES.LOGIN}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));
