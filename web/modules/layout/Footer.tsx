import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { FaFacebook, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import { ROUTE_NAMES } from "../../../common";
import { LayoutStyles } from "./Layout";

const useStyles = makeStyles((theme: Theme) => ({
  mainText: {
    fontWeight: "bolder",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  backgroundImage: {
    backgroundColor: "rgba(0,0,0)",
    color: theme.palette.common.white
  },
  socialIconsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  socialIcon: {
    marginRight: theme.spacing(3)
  },
  dividerStyle: {
    height: 1,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(6),
    width: "100%"
  },
  leftPanelStyle: {
    marginRight: theme.spacing(6)
  },
  contactStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  linkStyle: {
    textDecoration: "none",
    marginBottom: theme.spacing(2),
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export const Footer = () => {
  const classes = useStyles();
  const layoutClass = LayoutStyles();
  return (
    <div className={classes.backgroundImage}>
      <div className={layoutClass.mainStyle}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
            <div className={classes.leftPanelStyle}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.mainText}
              >
                Switch Title
              </Typography>
              We are a community and want to help you in your Journey to change
              career. We know that it is not easy process and many times you do
              not know where to start. Connect with us and share your success,
              failure, motivation, fears and anything else. Let's help each
              other in doing what we really want to do.
              <div className={classes.socialIconsContainer}>
                <FaFacebook size={20} className={classes.socialIcon} />
                <FaTwitter size={20} className={classes.socialIcon} />
                <FaYoutube size={20} className={classes.socialIcon} />
                <FaMedium size={20} className={classes.socialIcon} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
            <div className={classes.contactStyle}>
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.mainText}
              >
                CONTACT
              </Typography>
              <Link href={ROUTE_NAMES.ADVERTISE}>
                <div className={classes.linkStyle}>Advertise</div>
              </Link>

              <Link href={ROUTE_NAMES.CONTACT_US}>
                <div className={classes.linkStyle}>Contact us </div>
              </Link>

              <Link href={ROUTE_NAMES.FAQ}>
                <div className={classes.linkStyle}>FAQ</div>
              </Link>
            </div>
          </Grid>
          <Divider orientation="vertical" className={classes.dividerStyle} />
        </Grid>
      </div>
    </div>
  );
};
