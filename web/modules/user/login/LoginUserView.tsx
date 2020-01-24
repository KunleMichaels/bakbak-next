import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { ROUTE_NAMES, userValidationSchema } from "../../../../common";
import {
  LoginInput,
  normalizedErrors,
  User,
  UserPayload
} from "../../../../controller";
import { filter } from "../../util/BadWords";
import InputField from "../../shared/input/InputField";
import { PasswordInput } from "../../shared/input/PasswordInput";
import { RecaptchaInput } from "../../shared/input/RecaptchaInput";
import { OptionButtons } from "../../shared/OptionButtons";
import { Typography } from "@material-ui/core";

interface Props {
  submit: (values: LoginInput) => Promise<UserPayload | null>;
  onComplete: (user: User) => void;
}
interface FormValues extends LoginInput {
  recaptcha: boolean;
}
export const LoginUserView = (props: Props) => {
  const classes = useStyles();

  const onSubmit = async (
    values: FormValues,
    { setErrors, setSubmitting }: FormikHelpers<FormValues>
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

  const validate = (values: FormValues) => {
    const errors: any = {};
    if (filter.isProfane(values.email)) {
      errors.email = "No profane or reserved words allowed";
    }
    if (!values.recaptcha) {
      errors.recaptcha = "Complete the Recaptcha";
    }
    return errors;
  };

  return (
    <div className={classes.form}>
      <Typography variant="h5" style={{ marginRight: 30 }}>
        Login
      </Typography>
      <Formik
        initialValues={{ email: "", password: "", recaptcha: false }}
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
            <PasswordInput />
            <Field name="recaptcha" as={RecaptchaInput} />
            <OptionButtons
              isSubmitting={isSubmitting}
              primaryLabel="Login"
              secondaryLabel="Regsiter"
              secondaryHref={ROUTE_NAMES.REGISTER}
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
