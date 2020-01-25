import { IconButton, Theme, Typography, makeStyles } from "@material-ui/core";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

interface Props {
  loggedUser?: any;
  data: any;
  dataVoteChange?: (likeDislike: number) => void;
  openLoginAlert?: () => void;
}

export const VoteComponent = (props: Props) => {
  const classes = useStyles();
  const voteValue = 1;
  const { data } = props;
  return (
    <>
      <IconButton
        color={voteValue === 1 ? "primary" : "secondary"}
        onClick={() => null}
      >
        <GoThumbsup size={16} />
      </IconButton>
      <Typography display="inline" className={classes.buttonText}>
        {data.likes}
      </Typography>
      <IconButton color="secondary" onClick={() => null}>
        <GoThumbsdown size={16} />
      </IconButton>
      <Typography display="inline" className={classes.buttonText}>
        {data.dislikes}
      </Typography>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  buttonText: {
    marginRight: 10,
    fontSize: 13.5,
    color: theme.palette.secondary.main
  },
  input: {
    display: "none"
  }
}));
