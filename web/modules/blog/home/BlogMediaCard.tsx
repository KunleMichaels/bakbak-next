import { Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { QUERY, ROUTE_NAMES } from "../../../../common";
import NextLink from "../../shared/NextLink";

const useStyles = makeStyles((theme: Theme) => ({
  mainText: {
    textTransform: "capitalize",
    fontWeight: "bolder"
  },
  backgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: 400,
    backgroundColor: "rgba(0,0,0,.8)",
    color: theme.palette.common.white,
    cursor: "pointer"
  },
  overlay: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  primaryButton: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white
  },
  innerContainer: {
    margin: theme.spacing(4)
  }
}));

interface IProps {
  id: string;
  title: string;
  image?: string | null | undefined;
  slug?: string;
}

export const StoryMediaCard = (props: IProps) => {
  const classes = useStyles({});
  const { title, slug, image } = props;

  return (
    <div
      className={classes.backgroundImage}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className={classes.overlay}>
        <div className={classes.innerContainer}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </div>
        <div className={classes.innerContainer}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.primaryButton}
            component={NextLink as any}
            href={`${ROUTE_NAMES.BLOG_DETAILS}/${QUERY}`}
            as={`${ROUTE_NAMES.BLOG_DETAILS}/${slug}`}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
