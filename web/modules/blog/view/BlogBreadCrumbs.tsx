import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ROUTE_NAMES } from "../../../../common";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(1)
  },
  breadcrumbs: {
    textTransform: "none",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  link: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5)
  }
}));
export const StoryBreadCrumbs = () => {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
      <Link href={ROUTE_NAMES.HOME}>
        <a className={classes.breadcrumbs}>
          <MdHome size={20} className={classes.icon} />
          Home
        </a>
      </Link>
      <Link href={ROUTE_NAMES.BLOG}>
        <a className={classes.breadcrumbs}>
          <FaBook className={classes.icon} />
          Blog
        </a>
      </Link>
    </Breadcrumbs>
  );
};
