import gql from "graphql-tag";
import { ErrorFragments, UserFragments } from "../../fragments";

export const addPersonalDetailsMutation = gql`
  mutation AddPersonalDetails($input: PersonalDetailsInput!) {
    addPersonalDetails(input: $input) {
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
