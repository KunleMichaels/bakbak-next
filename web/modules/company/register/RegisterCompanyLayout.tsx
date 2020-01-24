import { Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import { AuthButtonOptions } from "../../shared/AuthButtonOptions";
import { AuthLayout } from "../../shared/AuthLayout";
import { AuthCompanyPanel } from "../AuthCompanyPanel";
import { RegisterCompanyController } from "./RegisterCompanyController";

export const RegisterCompanyLayout = () => {
  const classes = useStyles();

  const displayLeftPanel = () => (
    <>
      <div className={classes.title}>
        <Typography variant="h5" style={{ marginRight: 30 }}>
          Register as
        </Typography>
        <AuthButtonOptions title="Register" />
      </div>
      <RegisterCompanyController />
    </>
  );
  return (
    <div className={classes.container}>
      {AuthLayout(displayLeftPanel, () => (
        <AuthCompanyPanel />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(15)
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(6)
  }
}));
