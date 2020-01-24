// import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TagInput } from "../../../../controller";
import { ChipsComponent } from "../create/ChipsComponent";

const useStyles = makeStyles((theme: Theme) => ({
  dividerStyle: {
    height: 1,
    backgroundColor: theme.palette.common.black,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  optionsContainer: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    display: "flex",
    flexDirection: "column"
  },
  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  tagText: {
    fontWeight: "bolder",
    alignSelf: "center",
    marginBottom: theme.spacing(2)
  }
}));

interface Props {
  tags: TagInput[] | null | undefined;
}

export const TagContainer = ({ tags }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.optionsContainer}>
      <Divider className={classes.dividerStyle} />
      <Typography variant="subtitle2" gutterBottom className={classes.tagText}>
        TAGS
      </Typography>
      <div className={classes.chipsContainer}>
        {tags &&
          tags.map((tag) => (
            <ChipsComponent
              label={tag.tagName}
              key={`${tag.tagId}${tag.tagName}`}
              size="small"
            />
          ))}
      </div>
      <Divider className={classes.dividerStyle} />
    </div>
  );
};
