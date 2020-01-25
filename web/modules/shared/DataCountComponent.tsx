import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { Button, makeStyles, Theme } from "@material-ui/core";

interface Props {
  count: number;
  toggleDisplay: () => void;
  showData: boolean;
}
export const DataCountComponent = (props: Props) => {
  const { count, toggleDisplay, showData } = props;
  const classes = useStyles();

  const toggleDisplayData = () => {
    toggleDisplay();
  };
  return (
    <Button
      className={classes.menuButton}
      aria-haspopup="true"
      onClick={toggleDisplayData}
      startIcon={
        showData ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />
      }
    >
      {showData ? "Hide " : "Show "} {count} Replies
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textTransform: "none"
  }
}));
