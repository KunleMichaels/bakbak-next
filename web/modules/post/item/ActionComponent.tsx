import { VoteComponent } from "../../shared/VoteComponent";
import { DataCountComponent } from "../../shared/DataCountComponent";
import { SocialShare } from "../../shared/SocialShareComponent";
import { MdShare } from "react-icons/md";
import { useState } from "react";
import { makeStyles, Theme, Button } from "@material-ui/core";
import { Post } from "../../../../controller";

interface Props {
  data: Post;
}

const postLikes = {
  likes: 1,
  dislikes: 1
};

export const ActionComponent = (props: Props) => {
  const [showComments, setShowComments] = useState(false);
  const [hideSocial, setHideSocial] = useState(true);
  const classes = useStyles();

  const { data } = props;
  const { tags } = data;
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
    <>
      <div className={classes.actionContainer}>
        <div>
          <VoteComponent data={postLikes} />
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
          url={"https://www.bakbakapp.com/" + data.slug}
          title={data.title}
          details={data.details}
          hashtags={hashTags}
          websiteName={"BakBak App"}
        />
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  userName: {
    cursor: "pointer"
  },
  dateStyle: { color: theme.palette.secondary.light, fontSize: 13 },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 20,
    marginTop: theme.spacing(-2)
  },
  menuButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "auto",
    textTransform: "none"
  }
}));
