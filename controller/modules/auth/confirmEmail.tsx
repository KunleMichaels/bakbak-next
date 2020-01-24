import gql from "graphql-tag";
import { ErrorFragments } from "../../fragments";

export const confirmEmailMutation = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token) {
      error {
        ...ErrorFragments_error
      }
    }
  }
  ${ErrorFragments.error}
`;
