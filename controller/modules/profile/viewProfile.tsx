import gql from "graphql-tag";
import { ErrorFragments, UserFragments } from "../../fragments";

export const viewProfileQuery = gql`
  query ViewProfile($userName: String!) {
    viewProfile(userName: $userName) {
      user {
        ...UserFragments_user
      }
      errors {
        ...ErrorFragments_error
      }
    }
  }
  ${UserFragments.user}
  ${ErrorFragments.error}
`;

