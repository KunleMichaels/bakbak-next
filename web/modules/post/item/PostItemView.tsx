import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";
import { formatDistanceToNow } from "date-fns";
import { QUERY, ROUTE_NAMES } from "../../../../common";
import { MoreOptionsComponent } from "../../shared/MoreOptionsComponent";
import NextLink from "../../shared/NextLink";
import { Post } from "../../../../controller";
import { SlateReadOnlyView } from "../../shared/slate/SlateReadOnlyView";
import Paper from "@material-ui/core/Paper";
import { ActionComponent } from "./ActionComponent";

const useStyles = makeStyles((theme: Theme) => ({
  userName: {
    cursor: "pointer"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    borderColor: theme.palette.secondary.light
  },
  dateAndUserName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  mainTextArea: {
    flexDirection: "column",
    marginLeft: theme.spacing(2)
  },
  dateStyle: { color: theme.palette.secondary.light, fontSize: 13 },
  moreButton: {}
}));

interface IProps {
  post: Post;
}

export const PostItemView = (props: IProps) => {
  const classes = useStyles();
  const { post } = props;
  const { author } = post;
  const dateFromNow = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true
  });
  const renderAvatar = () => {
    if (author.pictureUrl) {
      return <Avatar src={author.pictureUrl} />;
    }
    return <Avatar>{author.userName.substr(0, 2)}</Avatar>;
  };

  return (
    <Paper variant="outlined">
      <div className={classes.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>{renderAvatar()}</div>
          <div className={classes.mainTextArea}>
            <div className={classes.dateAndUserName}>
              Posted by{" "}
              <NextLink
                href={`${ROUTE_NAMES.USER_VIEW_PROFILE}/${QUERY}`}
                as={`${ROUTE_NAMES.USER_VIEW_PROFILE}/${author.userName}`}
                style={{ color: "black", marginLeft: 5 }}
                notNaked={true}
              >
                <span className={classes.userName}>@{author.userName}</span>
              </NextLink>
              <Typography className={classes.dateStyle}>
                {" "}
                ({dateFromNow})
              </Typography>
            </div>
            <NextLink
              href={`${ROUTE_NAMES.POST_DETAILS}/${QUERY}`}
              as={`${ROUTE_NAMES.POST_DETAILS}/${post.slug}`}
              style={{ color: "black", marginLeft: 5 }}
              notNaked={true}
            >
              <div className={classes.userName}>
                <Typography variant="h6">{post.title}</Typography>
              </div>
              <div>
                <SlateReadOnlyView details={post.details} />
              </div>
            </NextLink>
          </div>
        </div>
        <div className={classes.moreButton}>
          <MoreOptionsComponent
            isOwner={true}
            selectedOption={(option) => {
              console.log(option);
            }}
          />
        </div>
      </div>
      <ActionComponent data={post} />
    </Paper>
  );
};
