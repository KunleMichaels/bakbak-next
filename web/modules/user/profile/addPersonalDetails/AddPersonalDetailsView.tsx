import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { normalizedErrors, UserPayload } from "../../../../../controller";
import { USER_REGISTRATION_STEPS } from "../../../../constants";
import { AuthLayout } from "../../../shared/AuthLayout";
import InputField from "../../../shared/input/InputField";
import { StepperComponent } from "../../../shared/StepperComponent";
import { AuthUserPanel } from "../../AuthUserPanel";

interface FormValues {
  fullName: string;
  linkedinUrl: string;
  picture: any;
}
interface Props {
  formValues: FormValues;
  submit: (values: FormValues) => Promise<UserPayload | null>;
  onComplete: () => void;
}

const AddPersonalDetailsView = (props: Props) => {
  const classes = useStyles({});
  const {
    formValues: { fullName, linkedinUrl, picture }
  } = props;
  const handleSubmit = async (
    values: FormValues,
    { setErrors }: FormikHelpers<FormValues>
  ) => {
    const response = await props.submit(values);
    if (response) {
      if (response.user) {
        props.onComplete();
      } else if (response.errors) {
        setErrors(normalizedErrors(response.errors));
      }
    }
  };

  const displayLeftPanel = () => (
    <>
      <Typography component="h1" variant="h5">
        Personal Details
      </Typography>
      <div className={classes.form}>
        <Formik
          initialValues={{ fullName, linkedinUrl, picture }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              name="fullName"
              label="Full Name"
              autoComplete="name"
              required={true}
              autoFocus={true}
              fullWidth={true}
              as={InputField}
            />
            <Field
              name="linkedinUrl"
              label="LinkedIn profile link"
              autoComplete="url"
              required={true}
              fullWidth={true}
              as={InputField}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save & Next
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
  return (
    <div className={classes.container}>
      <StepperComponent steps={USER_REGISTRATION_STEPS} activeStep={1} />
      {AuthLayout(displayLeftPanel, () => (
        <AuthUserPanel />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(18)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  skillStye: {
    marginTop: theme.spacing(3)
  },
  submit: {
    marginTop: theme.spacing(8)
  }
}));

export default AddPersonalDetailsView;
