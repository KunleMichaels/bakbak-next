import { InputBase } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { MdSearch } from "react-icons/md";

// import * as debounce from "lodash.debounce";
import * as React from "react";

// import {
//   HeaderContextProps,
//   withHeaderContext
// } from "../../../context/HeaderContext";

const SearchBarComponent = () => {
  const classes = useStyles({});

  // this.handleDebounce = debounce(this.handleDebounce.bind(this), 700);
  const handleDebounce = (value: string) => {
    console.log(value);
    // this.props.headerContext.updateSearchText(value);
  };
  const onChange = (event: any) => {
    handleDebounce(event.target.value);
  };
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <MdSearch />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onChange={onChange}
        />
      </div>
      <div className={classes.mobileSearch}>
        <MdSearch />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    display: "none",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      display: "flex"
    }
  },
  mobileSearch: {
    width: theme.spacing(2),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      display: "none"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(7),
    transition: theme.transitions.create("width")
  }
}));

export default SearchBarComponent;
