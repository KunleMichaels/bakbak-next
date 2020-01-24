import { makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { Footer } from "./Footer";
import HeaderConnector from "./header/HeaderConnector";

// import HeaderConnector from "./auth/HeaderConnector";

export const LayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
    // backgroundColor: theme.palette.background.paper
  },
  mainStyle: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6)
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10)
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: theme.spacing(18),
      marginRight: theme.spacing(18)
    }
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

export const Layout = ({ children }: any) => {
  const classes = LayoutStyles();
  return (
    <div>
      <div className={classes.root}>
        <header>
          <HeaderConnector />
        </header>
        <main className={classes.mainStyle}>{children}</main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export const getLayout = (page: any) => <Layout>{page}</Layout>;
