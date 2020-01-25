import {
  Avatar,
  makeStyles,
  Theme,
  Typography,
  Button
} from "@material-ui/core";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import { QUERY, ROUTE_NAMES } from "../../../../common";
import { MoreOptionsComponent } from "../../shared/MoreOptionsComponent";
import NextLink from "../../shared/NextLink";
import { Post } from "../../../../controller";
import { SlateReadOnlyView } from "../../shared/slate/SlateReadOnlyView";
import Paper from "@material-ui/core/Paper";
import { VoteComponent } from "../../shared/VoteComponent";
import { DataCountComponent } from "../../shared/DataCountComponent";
import { SocialShare } from "../../shared/SocialShareComponent";
import { MdShare } from "react-icons/md";

const useStyles = makeStyles((theme: Theme) => ({
  userName: {
    cursor: "pointer"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
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
  moreButton: {},
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 20
  },
  menuButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "auto",
    textTransform: "none"
  }
}));

interface IProps {
  post: Post;
}

const data = {
  likes: 1,
  dislikes: 1
};

export const PostItemView = (props: IProps) => {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);
  const [hideSocial, setHideSocial] = useState(true);

  const { post } = props;
  const { author, tags } = post;
  const dateFromNow = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true
  });
  const renderAvatar = () => {
    if (author.pictureUrl) {
      return <Avatar src={author.pictureUrl} />;
    }
    return <Avatar>{author.userName.substr(0, 2)}</Avatar>;
  };
  const toggleAllReplies = () => {
    setShowComments((showcomm) => !showcomm);
  };
  const toggleShareButtons = () => {
    setHideSocial((s) => !s);
  };
  let hashTags: string[] = [];
  if (tags && tags.length > 0) {
    hashTags = tags.map((tag) => tag.tagName);
  }
  return (
    <Paper variant="outlined">
      <div className={classes.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>{renderAvatar()}</div>
          <div className={classes.mainTextArea}>
            <div className={classes.dateAndUserName}>
              Posted by:{" "}
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
                - ({dateFromNow})
              </Typography>
            </div>
            <div className={classes.userName}>
              <Typography variant="h6">{post.title}</Typography>
            </div>
            <div>
              <SlateReadOnlyView details={post.details} />
            </div>
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
      <div className={classes.actionContainer}>
        <div>
          <VoteComponent data={data} />
        </div>
        <div>
          <DataCountComponent
            count={2}
            toggleDisplay={toggleAllReplies}
            showData={showComments}
          />
        </div>
        <Button
          className={classes.menuButton}
          aria-haspopup="true"
          onClick={toggleShareButtons}
          startIcon={<MdShare size={16} />}
          color="secondary"
        >
          Share
        </Button>
      </div>
      <div hidden={hideSocial}>
        <SocialShare
          url={post.slug}
          title={post.title}
          details={post.details}
          hashtags={hashTags}
          websiteName={"BakBak App"}
        />
      </div>
    </Paper>
  );
};
