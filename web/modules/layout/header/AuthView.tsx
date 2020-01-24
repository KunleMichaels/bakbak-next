import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ROUTE_NAMES } from "../../../../common";
import SearchBarComponent from "./SearchBarComponent";
import NextLink from "../../shared/NextLink";

interface IProps {
  homeLink: string;
}

export const AuthView = (props: IProps) => {
  const { homeLink } = props;
  const classes = useStyles();
  return (
    <>
      <Button
        component={NextLink as any}
        className={classes.menuButton}
        aria-label="Go Home"
        href={homeLink}
        color="primary"
      >
        Switch Title
      </Button>
      <Divider orientation="vertical" className={classes.divider} />
      <div className={classes.sectionDesktop}>
        <SearchBarComponent />
        <div className={classes.grow} />
        <Button
          className={classes.menuButton}
          aria-label="Key Information"
          href={ROUTE_NAMES.BLOG}
        >
          Blog
        </Button>

        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Key Information"
          href={ROUTE_NAMES.LOGIN}
        >
          {/* Hire Talent */}
          Login
        </Button>
        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Key Information"
          href={ROUTE_NAMES.REGISTER}
        >
          {/* Change Career */}
          Register
        </Button>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%"
  },
  menuButton: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  iconStyle: {
    color: theme.palette.primary.main
  },
  grow: {
    flexGrow: 1
  },
  divider: {
    color: theme.palette.secondary.dark,
    height: 20,
    width: 2,
    marginRight: theme.spacing(10)
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));
