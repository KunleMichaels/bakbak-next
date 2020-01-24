import gql from "graphql-tag";
import { ErrorFragments, UserFragments } from "../../fragments";

export const registerMutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
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
