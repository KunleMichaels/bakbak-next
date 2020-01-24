import {
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Theme
} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import React, { useState } from "react";
import { FaBlog, FaUserCog } from "react-icons/fa";
import { MdMoreVert, MdAccountCircle, MdNotifications } from "react-icons/md";
import HeaderView from "./HeaderView";
import NextLink from "../../shared/NextLink";

interface Props {
  homeLink: string;
  logoutLink: string;
  blogLink: string;
  //
  profileLink: string;
  //
  confirmed: boolean;
}

const HeaderLoggedView = (props: Props) => {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { logoutLink, blogLink, profileLink, confirmed, homeLink } = props;

  const classes = useStyles({});

  const handleProfileMenuOpen = (event: any) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderProfileMenu = () => {
    return (
      <Menu
        anchorEl={profileMenuAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem component={NextLink as any} href={profileLink}>
          Settings
        </MenuItem>
        <MenuItem component={NextLink as any} href={logoutLink}>
          Logout
        </MenuItem>
      </Menu>
    );
  };

  const renderMobileMenu = () => {
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem component={NextLink as any} href={blogLink}>
          <p>Blog</p>
          <IconButton color="primary" aria-label="Create Post">
            <FaBlog />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <p>Notifications</p>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <MdNotifications />
            </Badge>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <p>Profile</p>
          <IconButton color="inherit">
            <MdAccountCircle />
          </IconButton>
        </MenuItem>
      </Menu>
    );
  };
  const renderMessage = () => {
    if (!confirmed) {
      return (
        <div className={classes.emailConfirm}>
          Please check your email and confirm your account
        </div>
      );
    }
    return null;
  };

  const renderDesktopView = () => (
    <>
      <div className={classes.sectionDesktop}>
        <Button
          component={NextLink as any}
          className={classes.menuButton}
          aria-label="Key Information"
          href={blogLink}
          endIcon={<FaBlog />}
        >
          Blog
        </Button>

        <Button
          className={classes.menuButton}
          aria-owns={isProfileMenuOpen ? "material-appbar" : undefined}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          endIcon={<FaUserCog />}
        >
          Account
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
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  return (
    <HeaderView
      homeLink={homeLink}
      renderDesktopView={renderDesktopView}
      renderMobileMenu={renderMobileMenu}
      renderMessage={renderMessage}
      renderProfileMenu={renderProfileMenu}
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
  emailConfirm: {
    display: "flex",
    color: theme.palette.primary.main,
    alignSelf: "center",
    marginBottom: theme.spacing(1)
  },
  menuButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "auto"
  }
}));

export default React.memo(HeaderLoggedView);
