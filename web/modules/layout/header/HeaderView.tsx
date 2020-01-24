import {
  AppBar,
  Button,
  Divider,
  Fab,
  Slide,
  Theme,
  Toolbar,
  useScrollTrigger,
  Zoom
} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import { ROUTE_NAMES } from "../../../../common";
import SearchBarComponent from "./SearchBarComponent";
import { MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  homeLink?: string;
  renderMobileMenu?: () => void;
  renderDesktopView?: () => void;
  renderMessage?: () => void;
  renderProfileMenu?: () => void;
}

const HideOnScroll = (props: any) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

function ScrollTop(props: any) {
  const { children, window } = props;
  const classes = useStyles({});
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollTop}
      >
        {children}
      </div>
    </Zoom>
  );
}

const HeaderView = (props: Props) => {
  const classes = useStyles({});

  const {
    homeLink = ROUTE_NAMES.HOME,
    renderMobileMenu,
    renderDesktopView,
    renderMessage,
    renderProfileMenu,
    ...hideProps
  } = props;

  return (
    <>
      <HideOnScroll {...hideProps}>
        <div className={classes.root}>
          <AppBar className={classes.appBarStyle}>
            <Toolbar>
              <Button
                className={classes.menuButton}
                color="primary"
                aria-label="Go Home"
                href={homeLink}
              >
                Switch Title
              </Button>
              <Divider orientation="vertical" className={classes.divider} />
              <div className={classes.grow} />
              <SearchBarComponent />
              <div className={classes.grow} />
              {renderDesktopView ? renderDesktopView() : ""}
            </Toolbar>
            {renderMessage ? renderMessage() : ""}
          </AppBar>
          {renderMobileMenu ? renderMobileMenu() : ""}
          {renderProfileMenu ? renderProfileMenu() : ""}
        </div>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...hideProps}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <MdKeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(3)
  },
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  appBarStyle: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.dark
  },
  menuButton: {
    marginLeft: theme.spacing(-2),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1)
    }
  },
  grow: {
    flexGrow: 1
  },
  divider: {
    color: theme.palette.secondary.dark,
    height: 20,
    width: 2
  }
}));

export default React.memo(HeaderView);
