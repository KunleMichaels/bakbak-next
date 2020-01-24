import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  bigAvatar: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.secondary.main
  }
}));

export const renderImage = (userName: string, pictureUrl?: string | null) => {
  const classes = useStyles({});

  if (pictureUrl) {
    return (
      <Avatar alt={userName} src={pictureUrl} className={classes.bigAvatar} />
    );
  } else {
    return (
      <Avatar alt={userName} className={classes.bigAvatar}>
        {userName.substr(0, 2).toUpperCase()}
      </Avatar>
    );
  }
};
