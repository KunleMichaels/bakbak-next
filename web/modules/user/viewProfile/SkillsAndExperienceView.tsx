import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { User } from "../../../../controller";
import RatingInput from "../../shared/input/RatingInput";
import { Button } from "@material-ui/core";
import NextLink from "../../shared/NextLink";
import { ROUTE_NAMES, QUERY } from "../../../../common";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  column1: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(6),
    textAlign: "center"
  },
  summary: {
    marginBottom: theme.spacing(2)
  },
  skillsContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    marginTop: theme.spacing(2)
  },
  button: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textTransform: "none",
    textDecoration: "none"
  }
}));

interface Props {
  user: User;
}

export const SkillsAndExperienceView = ({ user }: Props) => {
  const classes = useStyles({});
  if (!user) {
    return null;
  }
  const deleteSkill = (_: string) => {};
  const renderRatings = () => {
    const { skills } = user;
    if (skills && skills.length > 0) {
      return skills.map((skill) => (
        <RatingInput
          skill={skill}
          deleteSkill={deleteSkill}
          key={skill.skillName}
        />
      ));
    } else {
      return <span />;
    }
  };
  return (
    <>
      <Paper className={classes.paper}>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          className={classes.summary}
        >
          Summary
        </Typography>
        <Divider />
        <Typography variant="body2" gutterBottom className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Paper>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.skillsContainer}>
          <Typography variant="button" display="block" gutterBottom>
            Skills
          </Typography>
          <Button
            component={NextLink as any}
            href={`${ROUTE_NAMES.USER_UPDATE_PROFILE}/${QUERY}`}
            as={`${ROUTE_NAMES.USER_UPDATE_PROFILE}/${user.userName}`}
            variant="outlined"
            className={classes.button}
          >
            Update Skills
          </Button>
        </div>

        <Divider />
        <div className={classes.text}>{renderRatings()}</div>
      </Paper>
    </>
  );
};
