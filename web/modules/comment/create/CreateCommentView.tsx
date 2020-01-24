import { Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Field, Form, Formik } from "formik";
import { FaRegComments } from "react-icons/fa";
import InputField from "../../shared/input/InputField";
interface IProps {
  loggedUser: any;
}

export const CreateCommentView = (props: IProps) => {
  const { loggedUser } = props;
  const renderButtons = (resetForm: any) => {
    return (
      <>
        <Button
          type="submit"
          color="primary"
          onClick={() => console.log("submitted")}
          disabled={!loggedUser || !loggedUser.confirmed}
          variant="outlined"
          style={{ marginRight: 20 }}
        >
          Comment
        </Button>
        <Button color="secondary" onClick={resetForm} variant="outlined">
          Clear
        </Button>
      </>
    );
  };
  const onSubmit = (values: any) => {
    console.log(values);
  };
  let textLabel = "";
  if (!loggedUser) {
    textLabel = "Please login to comment";
  } else if (loggedUser && !loggedUser.confirmed) {
    textLabel = "Comment goes here - Confirm your email to comment";
  } else {
    textLabel = "Comment goes here";
  }
  return (
    <div style={{ marginBottom: 100 }}>
      <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
        {({ resetForm }) => (
          <Form>
            <Field
              name="text"
              label={textLabel}
              fullWidth={true}
              multiline={true}
              rows={1}
              rowsMax={5}
              as={InputField}
              startAdornment={
                <InputAdornment position="start">
                  <FaRegComments size={18} />
                </InputAdornment>
              }
            />
            {renderButtons(resetForm)}
          </Form>
        )}
      </Formik>
    </div>
  );
};
