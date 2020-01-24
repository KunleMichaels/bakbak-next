import { Button, IconButton, Menu, MenuItem, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import React, { useState } from "react";
import { FaBlog, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";

import { ROUTE_NAMES } from "../../../../common";
import HeaderView from "./HeaderView";
import NextLink from "../../shared/NextLink";

const HeaderAuthView = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles({});

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMobileMenu = () => {
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem component={NextLink as any} href={ROUTE_NAMES.REGISTER}>
          <p>Register</p>
          <IconButton aria-label="Touch to Register" color="inherit">
            <FaUserPlus />
          </IconButton>
        </MenuItem>
        <MenuItem component={NextLink as any} href={ROUTE_NAMES.LOGIN}>
          <p>Login</p>
          <IconButton aria-label="Touch to Login" color="inherit">
            <FaSignInAlt />
          </IconButton>
        </MenuItem>
        <MenuItem component={NextLink as any} href={ROUTE_NAMES.BLOG}>
          <p>Blog</p>
          <IconButton aria-label="Goto Blog" color="inherit">
            <FaBlog />
          </IconButton>
        </MenuItem>
      </Menu>
    );
  };

  const renderDesktopView = () => (
    <>
      <div className={classes.sectionDesktop}>
        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Blog Page"
          href={ROUTE_NAMES.BLOG}
          endIcon={<FaBlog />}
        >
          Blog
        </Button>
        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Login Page"
          href={ROUTE_NAMES.LOGIN}
          endIcon={<FaSignInAlt />}
        >
          {/* Hire Talent */}
          Login
        </Button>
        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Register Page"
          href={ROUTE_NAMES.REGISTER}
          endIcon={<FaUserPlus />}
        >
          Register
        </Button>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MdMoreVert />
        </IconButton>
      </div>
    </>
  );
  return (
    <HeaderView
      homeLink={ROUTE_NAMES.HOME}
      renderDesktopView={renderDesktopView}
      renderMobileMenu={renderMobileMenu}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.secondary.dark
  },
  menuButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "auto"
  }
}));

export default React.memo(HeaderAuthView);
