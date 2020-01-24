import { Divider } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { User } from "../../../../controller";
import { renderImage } from "../../shared/RenderProfileImage";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(2)
  },
  title: {
    marginTop: theme.spacing(2)
  },
  linkedin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginBottom: 20
  },
  dividerStyle: {
    margin: theme.spacing(3, -2, 3, -2)
  }
}));

interface Props {
  user: User;
}
export const UserDetailsView = ({ user }: Props) => {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {renderImage(user.userName, user.pictureUrl)}
      </div>
      <Typography variant="subtitle2" gutterBottom className={classes.title}>
        {user.fullName}
      </Typography>
      @{user.userName}
      <Divider className={classes.dividerStyle} variant="fullWidth" />
      <div className={classes.linkedin}>
        <FaLinkedinIn color="grey" />
        <Typography
          style={{ marginLeft: 15 }}
          noWrap={true}
          variant="caption"
          display="inline"
        >
          {user.linkedinUrl}
        </Typography>
      </div>
      <div className={classes.linkedin}>
        <FaTwitter color="grey" size={16} />
        <Typography
          style={{ marginLeft: 15 }}
          noWrap={true}
          variant="caption"
          display="inline"
        >
          {user.linkedinUrl}
        </Typography>
      </div>
    </div>
  );
};
