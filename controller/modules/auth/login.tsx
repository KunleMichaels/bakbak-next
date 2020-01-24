import gql from "graphql-tag";
import { ErrorFragments, UserFragments } from "../../fragments";

export const loginMutation = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
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
