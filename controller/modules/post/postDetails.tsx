import gql from "graphql-tag";
import { PostFragments } from "../../fragments";

export const postDetailsQuery = gql`
  query PostDetails($slug: String!) {
    postDetails(slug: $slug) {
      ...PostFragments_post
    }
  }
  ${PostFragments.post}
`;
