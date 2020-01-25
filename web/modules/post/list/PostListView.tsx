import { Post } from "../../../../controller";
import Grid from "@material-ui/core/Grid";
import { memo } from "react";
import { PostItemView } from "../item/PostItemView";

interface IProps {
  postList: Post[] | null;
}

export const PostListView = memo((props: IProps) => {
  const { postList } = props;
  const otherCards = (data: Post) => {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={data.id}>
        <PostItemView post={data} />
      </Grid>
    );
  };
  if (postList && postList.length > 0) {
    return <>{postList.map((d) => otherCards(d))}</>;
  }
  return <div />;
});
