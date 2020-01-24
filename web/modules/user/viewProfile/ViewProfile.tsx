import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { User } from "../../../../controller";
import { AntTab, AntTabs } from "../../shared/AntTabs";
import { RelatedData } from "./RelatedData";
import { SkillsAndExperienceView } from "./SkillsAndExperienceView";
import { UserDetailsView } from "./UserDetailsView";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center"
  }
}));

interface Props {
  user: User;
  loggedUser: User | null;
}

// TODO: if loggedUser = user then extra privledges like update status etc.
// Otherwise do not show edit, create functionality

export const ViewProfile = ({ user }: Props) => {
  const classes = useStyles({});
  const [currentTab, setCurrentTab] = useState(0);
  const onChangeTab = (_: any, value: any) => {
    setCurrentTab(value);
  };
  const renderTabs = () => {
    if (currentTab === 0) {
      return <SkillsAndExperienceView user={user} />;
    } else if (currentTab === 1) {
      return <div>{user.email + " 1 " + user.userName}</div>;
    } else if (currentTab === 2) {
      return <div>{user.email + " 2 " + user.userName}</div>;
    }
    return null;
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: 20 }}>
          <AntTabs
            value={currentTab}
            onChange={onChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <AntTab label={`DETAILS`} />
            <AntTab label={`POSTS`} />
            <AntTab label={`CONTACTS`} />
          </AntTabs>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Paper className={classes.paper} elevation={3}>
            <UserDetailsView user={user} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          {renderTabs()}
        </Grid>
        <Hidden mdDown>
          <Grid item md={3} lg={3}>
            <Paper className={classes.paper} variant="outlined">
              <RelatedData user={user} />
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
