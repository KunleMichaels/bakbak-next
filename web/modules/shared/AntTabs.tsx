import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";

export const AntTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: "1px solid #e8e8e8"
    },
    indicator: {
      backgroundColor: theme.palette.primary.main
    }
  })
)(Tabs);

export const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      "&:hover": {
        color: theme.palette.common.black,
        opacity: 1
      },
      "&$selected": {
        color: theme.palette.common.black,
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: theme.palette.common.black
      }
    },
    selected: {}
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}
