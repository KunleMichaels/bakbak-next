import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { StoryMediaCard } from "../home/BlogMediaCard";

const useStyles = makeStyles((theme: Theme) => ({
  dividerStyle: {
    height: 2,
    backgroundColor: theme.palette.common.black,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: "100%"
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  chipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  tagText: {
    marginBottom: theme.spacing(2),
    width: "100%",
    justifyContent: "center",
    display: "flex",
    color: theme.palette.primary.main
  },
  topMargin: {
    marginTop: theme.spacing(4)
  }
}));

const data = [
  {
    id: 1,
    title: "What are the issues with Career Change?",
    slugUrl: "what-are-the-issues-with-career-change",
    imageName: "/images/blog/problems-with-career-change.jpg"
  },
  {
    id: 2,
    title: "3 easy steps to Change Career",
    slugUrl: "3-easy-steps-to-change-career",
    imageName: "/images/blog/3-easy-steps-to-change-career.jpg"
  }
];

export const MoreBlogs = () => {
  const classes = useStyles();
  const moreStoryCards = (data: any) => (
    <div style={{ marginBottom: 50 }} key={data.id}>
      <StoryMediaCard
        id={data.id}
        title={data.title}
        image={data.imageName}
        slug={data.slugUrl}
      />
    </div>
  );
  return (
    <>
      <div className={classes.topMargin} />
      <Divider className={classes.dividerStyle} />
      <Typography variant="subtitle2" gutterBottom className={classes.tagText}>
        Some Blogs
      </Typography>
      {data.map((d) => moreStoryCards(d))}
      <Divider className={classes.dividerStyle} />
      <div style={{ marginBottom: 200 }} />
    </>
  );
};
