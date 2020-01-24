import gql from "graphql-tag";
import { PostFragments } from "../../fragments";
import { CursorFragments } from "../../fragments";

export const searchPostListQuery = gql`
  query SearchPostList(
    $text: String!
    $limit: Int!
    $dateSort: String
    $cursor: CursorInput
  ) {
    searchPostList(
      text: $text
      limit: $limit
      dateSort: $dateSort
      cursor: $cursor
    ) @connection(key: "SearchPostListKeyConnection") {
      posts {
        ...PostFragments_post
      }
      hasMore
      cursor {
        ...CursorFragments_cursor
      }
    }
  }
  ${PostFragments.post}
  ${CursorFragments.cursor}
`;
