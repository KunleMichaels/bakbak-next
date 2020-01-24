import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import {
  MORE_OPTIONS_ACTIONS,
  MORE_OPTIONS_ACTIONS_OWNER,
  OptionType
} from "../../../common";

interface Props {
  isOwner: boolean;
  selectedOption: (option: string) => void;
}

export const MoreOptionsComponent = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOptionsMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionsMenuClose = () => {
    setAnchorEl(null);
  };

  const updateOption = (event: any) => {
    event.persist();
    props.selectedOption(event.target.textContent);
    handleOptionsMenuClose();
  };
  const renderOptionsMenu = (postOptions: OptionType[]) => {
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleOptionsMenuClose}
        style={{ width: 300 }}
      >
        {postOptions.map(option => (
          <MenuItem
            key={option.name}
            onClick={updateOption}
            style={{ minWidth: 150 }}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <Typography variant="inherit" noWrap>
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  };
  let postOptions = MORE_OPTIONS_ACTIONS;
  if (props.isOwner) {
    postOptions = MORE_OPTIONS_ACTIONS_OWNER;
  }
  const isMenuOpen = Boolean(anchorEl);
  return (
    <>
      <IconButton
        aria-owns={isMenuOpen ? "material-appbar" : undefined}
        aria-haspopup="true"
        onClick={handleOptionsMenu}
        color="inherit"
      >
        <MdMoreVert />
      </IconButton>
      {renderOptionsMenu(postOptions)}
    </>
  );
};
