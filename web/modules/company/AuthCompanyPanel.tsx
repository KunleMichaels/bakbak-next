import { Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";

export const AuthCompanyPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <Typography variant="h3" className={classes.title}>
          HIRE TALENT
        </Typography>
        <Typography variant="h5">START NOW</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(4)
  },
  container: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(/images/auth.jpg)",
    backgroundPosition: "center center",
    height: "100%",
    color: theme.palette.common.white
  },
  overlay: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2)
  }
}));
