import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Form, Formik } from "formik";
import React from "react";
import { AuthLayout } from "../shared/AuthLayout";
import { PasswordInput } from "../shared/input/PasswordInput";
import { AuthUserPanel } from "./AuthUserPanel";

interface Props {
  submit: (values: string) => Promise<any | null>;
  onComplete: () => void;
}

interface FormValues {
  password: string;
}

const ChangePasswordView = (props: Props) => {
  const classes = useStyles({});

  const onSubmit = async (values: FormValues) => {
    const response = await props.submit(values.password);
    if (response) {
      props.onComplete();
    }
  };

  const displayLeftPanel = () => {
    return (
      <>
        <Typography component="h1" variant="h5">
          Enter New password
        </Typography>
        <div className={classes.form}>
          <Formik initialValues={{ password: "" }} onSubmit={onSubmit}>
            <Form>
              <PasswordInput />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Reset Password
              </Button>
            </Form>
          </Formik>
        </div>
      </>
    );
  };
  return (
    <div className={classes.container}>
      {AuthLayout(displayLeftPanel, () => (
        <AuthUserPanel />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(15)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
}));

export { ChangePasswordView };
