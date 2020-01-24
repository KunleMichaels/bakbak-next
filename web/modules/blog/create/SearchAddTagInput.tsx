import { FormControl, FormHelperText } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FieldProps } from "formik";
import { SearchAddTagController } from "./SearchAddTagController";
import { TagInput } from "../../../../controller";

export const SearchAddTagInput: React.SFC<FieldProps<any>> = (props) => {
  const {
    field: { name },
    form: { setFieldValue, errors, touched }
  } = props;

  const classes = useStyles();
  const errorMessage = touched[name] && errors[name];

  const updateSelectedValues = (tags: TagInput[]) => {
    setFieldValue(name, tags);
  };

  return (
    <FormControl
      className={classes.formControl}
      error={Boolean(errorMessage)}
      fullWidth={true}
    >
      <SearchAddTagController updateSelectedValues={updateSelectedValues} />
      <FormHelperText id={`${name}-error-text`}>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginBottom: theme.spacing(1)
  }
}));
