import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";

export const AuthLayout = (leftPanel: () => any, rightPanel: () => any) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.leftPanel}>{leftPanel()}</Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.rightPanel}>{rightPanel()}</Paper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    height: "100%",
    width: "100%"
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  }
}));
