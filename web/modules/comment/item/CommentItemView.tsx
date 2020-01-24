import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";
// import { formatDistanceToNow } from "date-fns";
import React from "react";
import Linkify from "react-linkify";
import { QUERY, ROUTE_NAMES } from "../../../../common";
import { MoreOptionsComponent } from "../../shared/MoreOptionsComponent";
import NextLink from "../../shared/NextLink";

const useStyles = makeStyles((theme: Theme) => ({
  userName: {
    fontWeight: "bold",
    cursor: "pointer"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4)
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
  comment: any;
}

export const CommentItemView = (props: IProps) => {
  const classes = useStyles({});
  const { comment } = props;
  const { author } = comment;
  const renderAvatar = () => {
    if (author.pictureUrl) {
      return <Avatar src={author.pictureUrl} />;
    }
    return <Avatar>{author.userName.substr(0, 2)}</Avatar>;
  };
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>{renderAvatar()}</div>
        <div className={classes.mainTextArea}>
          <div className={classes.dateAndUserName}>
            <NextLink
              href={`${ROUTE_NAMES.USER_VIEW_PROFILE}/${QUERY}`}
              as={`${ROUTE_NAMES.USER_VIEW_PROFILE}/${author.userName}`}
              notNaked={true}
            >
              <Typography className={classes.userName} variant="body1">
                @{author.userName}
              </Typography>
            </NextLink>

            <Typography className={classes.dateStyle}>
              {" "}
              - ({comment.createdAt})
            </Typography>
          </div>
          <div>
            {comment.text && (
              <Typography style={{ fontSize: 15, fontWeight: 400 }}>
                <Linkify>
                  {comment.text
                    .split("\n")
                    .map((text: string, index: number) => (
                      <React.Fragment key={`${text}-${index}`}>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                </Linkify>
              </Typography>
            )}
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
  );
};
