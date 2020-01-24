import { Post } from "../../../../controller";
import { StoryMediaCard } from "./BlogMediaCard";
import Grid from "@material-ui/core/Grid";
import { memo } from "react";

interface IProps {
  postList: Post[] | null;
}

export const BlogListView = memo((props: IProps) => {
  const { postList } = props;
  const otherCards = (data: Post) => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={data.id}>
        <StoryMediaCard
          id={data.id}
          title={data.title}
          image={data.pictureUrl}
          slug={data.slug}
        />
      </Grid>
    );
  };
  if (postList && postList.length > 0) {
    return <>{postList.map((d) => otherCards(d))}</>;
  }
  return <div />;
});
