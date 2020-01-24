import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CreateCommentView } from "../create/CreateCommentView";
import { CommentItemView } from "../item/CommentItemView";

const useStyles = makeStyles((theme: Theme) => ({
  dividerStyle: {
    height: 2,
    backgroundColor: theme.palette.common.black,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%"
  },

  tagText: {
    marginBottom: theme.spacing(4),
    width: "100%",
    justifyContent: "center",
    display: "flex",
    color: theme.palette.primary.main
  }
}));

const comments = [
  {
    id: 1,
    text: "What are the issues with Career Change?",
    createdAt: "20 Jan 2019",
    author: {
      id: "1",
      userName: "user1",
      pictureUrl: "/images/blog/problems-with-career-change.jpg"
    }
  },
  {
    id: 2,
    text: "3 easy steps to Change Career",
    createdAt: "12 Mar 2019",
    author: {
      id: "2",
      userName: "user2",
      pictureUrl: "/images/blog/problems-with-career-change.jpg"
    }
  }
];

// interface IProps {
//   comments: any;
// }

export const CommentListView = () => {
  const classes = useStyles();
  return (
    <>
      <Divider className={classes.dividerStyle} />
      <Typography variant="subtitle2" gutterBottom className={classes.tagText}>
        COMMENTS ({comments.length})
      </Typography>
      <CreateCommentView loggedUser={null} />
      {comments.map(d => (
        <CommentItemView comment={d} key={d.id} />
      ))}
    </>
  );
};
