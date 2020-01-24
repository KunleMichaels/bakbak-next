import { Button } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import NextLink from "./NextLink";

interface Props {
  isSubmitting: boolean;
  secondaryHref: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export const OptionButtons = ({
  isSubmitting,
  secondaryHref,
  primaryLabel = "Register",
  secondaryLabel = "Login"
}: Props) => {
  const classes = useStyles({});
  return (
    <div className={classes.buttonContainer}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        {primaryLabel}
      </Button>
      <div className={classes.orTextStyle}>OR</div>
      <Button
        component={NextLink as any}
        fullWidth
        variant="outlined"
        color="secondary"
        className={classes.loginButton}
        href={secondaryHref}
      >
        {secondaryLabel}
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  loginButton: {
    color: theme.palette.secondary.dark
  },

  orTextStyle: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    alignSelf: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(10)
  }
}));
