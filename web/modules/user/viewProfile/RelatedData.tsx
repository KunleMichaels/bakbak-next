import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { User } from "../../../../controller";

const useStyles = makeStyles(theme => ({
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
    marginBottom: theme.spacing(1)
  },
  text: {
    marginTop: theme.spacing(2)
  }
}));

interface Props {
  user: User;
}
function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}
export const RelatedData = ({ user }: Props) => {
  const classes = useStyles({});
  if (!user) {
    return null;
  }
  return (
    <>
      <Typography
        variant="button"
        display="block"
        gutterBottom
        className={classes.summary}
      >
        Jobs
      </Typography>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders" dense>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Project Management (5)" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Software Developer (4)" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Photoshop (7)" />
        </ListItemLink>
      </List>
    </>
  );
};
