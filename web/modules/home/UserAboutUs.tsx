import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { GoDash } from "react-icons/go";
import { ROUTE_NAMES } from "../../../common";
import NextLink from "../shared/NextLink";

const useStyles = makeStyles((theme: Theme) => ({
  mainText: {
    fontWeight: "bolder"
  },
  secondaryText: {
    marginBottom: theme.spacing(6)
  },
  primaryButton: {
    textTransform: "none"
  },
  secondaryButton: {
    color: theme.palette.secondary.dark,
    textTransform: "none"
  },

  orTextStyle: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    alignSelf: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    }
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(2)
  }
}));

const data = [
  "Create Profile",
  "Do suggested trainings or interns",
  "Apply for the jobs"
];
export const UserAboutUs = () => {
  const classes = useStyles({});
  const [videoPlaying, setVideoPlaying] = useState(false);
  const customList = (text: string) => {
    return (
      <ListItem key={text}>
        <ListItemIcon>
          <GoDash />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  };
  const toggleVideoPlaying = () => {
    setVideoPlaying(!videoPlaying);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <div>
            <Typography variant="h4" className={classes.mainText} gutterBottom>
              Change your Career
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.secondaryText}
              gutterBottom
            >
              {data.map((d: string) => customList(d))}
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                component={NextLink as any}
                fullWidth
                variant="contained"
                color="primary"
                href={ROUTE_NAMES.REGISTER}
                className={classes.primaryButton}
              >
                Create Profile
              </Button>

              <div className={classes.orTextStyle}>OR</div>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.secondaryButton}
                onClick={toggleVideoPlaying}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>
      </Grid>
    </>
  );
};
