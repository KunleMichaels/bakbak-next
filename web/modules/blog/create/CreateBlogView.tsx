import { Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { ROUTE_NAMES } from "../../../../common";
import {
  normalizedErrors,
  CreatePostInput,
  PostPayload,
  Post
} from "../../../../controller";
import InputField from "../../shared/input/InputField";
import { RecaptchaInput } from "../../shared/input/RecaptchaInput";
import { OptionButtons } from "../../shared/OptionButtons";
import { SlateInputField } from "../../shared/slate/SlateInput";
import { DropzoneInput } from "../../shared/input/DropzoneInput";
import { SearchAddTagInput } from "./SearchAddTagInput";
import slugify from "slugify";

interface Props {
  onSubmit: (values: CreatePostInput) => Promise<PostPayload | null>;
  onComplete: (post: Post) => void;
}

export const CreateBlogView = (props: Props) => {
  const classes = useStyles();
  console.log();
  const validate = (values: CreatePostInput & { recaptcha: boolean }) => {
    const errors: any = {};
    if (values.details === JSON.stringify(initialValue)) {
      errors.details = "Need to enter the Post details";
    }
    if (!values.tagInput || values.tagInput.length === 0) {
      errors.tagInput = "Need to choose one Tag at least";
    }
    if (!values.recaptcha) {
      errors.recaptcha = "Complete the Recaptcha";
    }
    return errors;
  };

  const handleSlug = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    const date = new Date()
      .getTime()
      .toString()
      .substr(0, 8);

    setFieldValue(
      "slug",
      slugify(event.target.value)
        .substr(0, 70)
        .concat("-" + date)
    );
    setFieldValue("title", event.target.value);
  };
  const onSubmit = async (
    { recaptcha, ...submitValues }: CreatePostInput & { recaptcha: boolean },
    { setErrors, setSubmitting }: FormikHelpers<any>
  ) => {
    if (recaptcha) {
      const response = await props.onSubmit(submitValues);
      if (response) {
        if (response.post) {
          setSubmitting(false);
          props.onComplete(response.post);
        } else if (response.errors) {
          setErrors(normalizedErrors(response.errors));
          setSubmitting(false);
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography
          variant="h5"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          Create Blog
        </Typography>
      </div>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          tagInput: [],
          details: JSON.stringify(initialValue),
          picture: null,
          recaptcha: false
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, errors }) => {
          return (
            <Form className={classes.form}>
              <Field
                name="title"
                label="Title"
                placeholder="Choose a title of the Blog"
                required={true}
                autoFocus={true}
                fullWidth={true}
                as={InputField}
                onChange={(e: any) => handleSlug(e, setFieldValue)}
              />
              <Field
                name="slug"
                label="Post URL link"
                placeholder="This will be the link to this blog post"
                required={true}
                fullWidth={true}
                as={InputField}
              />
              <Field
                name="tagInput"
                label="Search Tags"
                component={SearchAddTagInput}
              />
              <Typography variant="subtitle2" gutterBottom>
                Enter Details:
              </Typography>
              <Field
                name="details"
                placeholder="Enter Details"
                as={SlateInputField}
                initValue={JSON.stringify(initialValue)}
                textContainerStyle={{ minHeight: 300, margin: 10 }}
              />
              <Typography variant="subtitle2" gutterBottom>
                Select Main Image:
              </Typography>
              <Field name="picture" component={DropzoneInput} />
              <Field name="recaptcha" as={RecaptchaInput} />
              {errors &&
                Object.entries(errors).map((e) => (
                  <div style={{ color: "red" }} key={e[0]}>
                    - {e[1]}
                  </div>
                ))}
              <OptionButtons
                isSubmitting={isSubmitting}
                primaryLabel="Create Post"
                secondaryLabel="Cancel"
                secondaryHref={ROUTE_NAMES.BLOG}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(6)
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
}));

const initialValue = [
  {
    children: [
      {
        text: ""
      }
    ]
  }
];
