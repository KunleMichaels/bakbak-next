import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { loginValidationSchema, ROUTE_NAMES } from "../../../../common";
import {
  Company,
  CompanyPayload,
  LoginCompanyInput,
  normalizedErrors
} from "../../../../controller";
import { filter } from "../../util/BadWords";
import InputField from "../../shared/input/InputField";
import { PasswordInput } from "../../shared/input/PasswordInput";
import { OptionButtons } from "../../shared/OptionButtons";

interface Props {
  submit: (values: LoginCompanyInput) => Promise<CompanyPayload | null>;
  onComplete: (company: Company) => void;
}

export const LoginCompanyView = (props: Props) => {
  const classes = useStyles({});
  const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);
  const verifyRecaptcha = (_: any) => {
    setRecaptchaSuccess(true);
  };
  const onSubmit = async (
    values: LoginCompanyInput,
    { setErrors, setSubmitting }: FormikHelpers<LoginCompanyInput>
  ) => {
    const response = await props.submit(values);
    if (response) {
      if (response.company) {
        setSubmitting(false);
        props.onComplete(response.company);
      } else if (response.errors) {
        setErrors(normalizedErrors(response.errors));
        setSubmitting(false);
      }
    }
  };

  const validate = (values: LoginCompanyInput) => {
    const errors: any = {};
    if (filter.isProfane(values.email)) {
      errors.email = "No profane or reserved words allowed";
    }
    if (!recaptchaSuccess) {
      errors.password = "Complete the Recaptcha";
    }
    return errors;
  };
  return (
    <div className={classes.form}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        validationSchema={loginValidationSchema}
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
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_CAPTCHA_KEY}
              onChange={verifyRecaptcha}
              size="normal"
            />
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
