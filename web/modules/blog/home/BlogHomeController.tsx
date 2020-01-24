import {
  SearchPostListQuery,
  useSearchPostListLazyQuery
} from "../../../../controller";
import { BlogsHomeView } from "./BlogsHomeView";
import { BLOG_VIEW_LIMIT } from "../../../../common";
import { Waypoint } from "react-waypoint";
import produce from "immer";
import { useEffect, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import { BlogListView } from "./BlogListView";
import CircularProgress from "@material-ui/core/CircularProgress";

export const BlogHomeController = () => {
  const [
    callSearch,
    { loading, data, fetchMore }
  ] = useSearchPostListLazyQuery({ fetchPolicy: "cache-and-network" });
  useEffect(() => {
    callSearch({ variables: { text: "", limit: BLOG_VIEW_LIMIT } });
  }, []);

  // const { loading, data, fetchMore } = useSearchPostListQuery({
  //   variables: { text: "", limit: BLOG_VIEW_LIMIT },
  //   fetchPolicy: "cache-and-network"
  // });
  let postList: any = null;
  let hasMoreFlag = true;
  let cursorPost: any;
  if (!loading && data && data.searchPostList) {
    const {
      searchPostList: { posts, hasMore, cursor }
    } = data;
    postList = posts;
    hasMoreFlag = hasMore;
    if (cursor) {
      const { __typename, ...restOfCursor } = cursor;
      cursorPost = restOfCursor;
    }
  }

  const memoizedBlogListView = useCallback(() => {
    return <BlogListView postList={postList} />;
  }, [postList]);

  return (
    <>
      <Grid container spacing={2}>
        <BlogsHomeView />
        {!loading && memoizedBlogListView()}
        {loading && <CircularProgress />}
      </Grid>

      {data && data.searchPostList && (
        <Waypoint
          bottomOffset="-20px"
          onEnter={() => {
            !loading &&
              hasMoreFlag &&
              fetchMore({
                variables: {
                  text: "",
                  limit: BLOG_VIEW_LIMIT,
                  cursor: cursorPost
                },
                updateQuery: (
                  prev: SearchPostListQuery,
                  { fetchMoreResult }
                ) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  const { searchPostList }: any = fetchMoreResult;
                  if (prev && prev.searchPostList) {
                    const searchPostListUpdated = produce(
                      prev?.searchPostList,
                      (draft) => {
                        if (searchPostList.posts && draft.posts) {
                          draft.posts.push(...searchPostList.posts);
                        }
                        draft.hasMore = searchPostList.hasMore;
                        draft.cursor = searchPostList.cursor;
                      }
                    );
                    return {
                      ...prev,
                      searchPostList: searchPostListUpdated
                    };
                  }
                  return prev;
                }
              });
          }}
        />
      )}
    </>
  );
};
