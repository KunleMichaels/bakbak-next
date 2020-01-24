import { Post } from "../../../../controller";
import Grid from "@material-ui/core/Grid";
import { memo } from "react";

interface IProps {
  postList: Post[] | null;
}

const PostItemView = (post: Post) => {
  return <div>{post.title}</div>;
};

export const PostListView = memo((props: IProps) => {
  const { postList } = props;
  const otherCards = (data: Post) => {
    return (
      <Grid item xs={12} sm={10} md={10} lg={8} xl={8} key={data.id}>
        {PostItemView(data)}
      </Grid>
    );
  };
  if (postList && postList.length > 0) {
    return <>{postList.map((d) => otherCards(d))}</>;
  }
  return <div />;
});
