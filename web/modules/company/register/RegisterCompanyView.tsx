import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  companyRegisterValidationSchema,
  ROUTE_NAMES
} from "../../../../common";
import {
  Company,
  CompanyPayload,
  normalizedErrors,
  RegisterCompanyInput
} from "../../../../controller";
import { filter } from "../../util/BadWords";
import InputField from "../../shared/input/InputField";
import { PasswordInput } from "../../shared/input/PasswordInput";
import { OptionButtons } from "../../shared/OptionButtons";

interface Props {
  submit: (values: RegisterCompanyInput) => Promise<CompanyPayload | null>;
  onComplete: (company: Company) => void;
}

export const RegisterCompanyView = (props: Props) => {
  const classes = useStyles({});
  const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);
  const verifyRecaptcha = (_: any) => {
    setRecaptchaSuccess(true);
  };
  const onSubmit = async (
    values: RegisterCompanyInput,
    { setErrors, setSubmitting }: FormikHelpers<RegisterCompanyInput>
  ) => {
    console.log(values);

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

  const validate = (values: RegisterCompanyInput) => {
    const errors: any = {};
    if (filter.isProfane(values.email)) {
      errors.email = "No profane or reserved words allowed";
    }
    if (filter.isProfane(values.companyName)) {
      errors.companyName = "No profane or reserved words allowed";
    }
    if (!recaptchaSuccess) {
      errors.password = "Complete the Recaptcha";
    }
    return errors;
  };
  return (
    <div className={classes.form}>
      <Formik
        initialValues={{ email: "", companyName: "", password: "" }}
        validate={validate}
        validationSchema={companyRegisterValidationSchema}
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
              name="companyName"
              label="company name"
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
