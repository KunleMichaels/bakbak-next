import gql from "graphql-tag";
import { ErrorFragments, PostFragments } from "../../fragments";

export const createPostMutation = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        ...PostFragments_post
      }
      errors {
        ...ErrorFragments_error
      }
    }
  }
  ${PostFragments.post}
  ${ErrorFragments.error}
`;
