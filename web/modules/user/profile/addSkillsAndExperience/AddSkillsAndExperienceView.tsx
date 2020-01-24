import { Button, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import {
  normalizedErrors,
  SkillInput,
  UserPayload
} from "../../../../../controller";
import { USER_REGISTRATION_STEPS } from "../../../../constants";
import { AuthLayout } from "../../../shared/AuthLayout";
import { StepperComponent } from "../../../shared/StepperComponent";
import { AuthUserPanel } from "../../AuthUserPanel";
import SkillAndLevelInput from "../../../shared/input/SkillAndLevelInput";

interface FormValues {
  existingSkills: SkillInput[];
  newSkills: SkillInput[];
}

interface Props {
  formValues: FormValues;
  submit: (values: SkillInput[]) => Promise<UserPayload | null>;
  onComplete: () => void;
}

const AddSkillsAndExperienceView = (props: Props) => {
  const classes = useStyles({});
  const {
    formValues: { existingSkills, newSkills }
  } = props;
  const validate = (values: FormValues) => {
    const errors: any = {};
    if (!values.existingSkills || values.existingSkills.length === 0) {
      errors.existingSkills =
        "Need to select at least one Existing/Current skill";
    }
    if (!values.newSkills || values.newSkills.length === 0) {
      errors.newSkills = "Need to select at least one New skill";
    }
    return errors;
  };
  const handleSubmit = async (
    values: FormValues,
    { setErrors }: FormikHelpers<FormValues>
  ) => {
    setErrors({ existingSkills: undefined, newSkills: undefined });
    const response = await props.submit([
      ...values.existingSkills,
      ...values.newSkills
    ]);

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
        Skills and Experience
      </Typography>
      <div className={classes.form}>
        <Formik
          initialValues={{ existingSkills, newSkills }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.skillStye}
            >
              Add your existing skills
            </Typography>
            <Field
              name="existingSkills"
              component={SkillAndLevelInput}
              initValue={existingSkills}
              oldSkill={true}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.skillStye}
            >
              Add new skills (where you want to work)
            </Typography>
            <Field
              name="newSkills"
              component={SkillAndLevelInput}
              initValue={newSkills}
              oldSkill={false}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Finish
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
  return (
    <>
      <StepperComponent steps={USER_REGISTRATION_STEPS} activeStep={2} />
      {AuthLayout(displayLeftPanel, () => (
        <AuthUserPanel />
      ))}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  skillStye: {
    marginTop: theme.spacing(5)
  },
  submit: {
    marginTop: theme.spacing(8)
  }
}));

export default AddSkillsAndExperienceView;
