import gql from "graphql-tag";
import { ErrorFragments, UserFragments } from "../../fragments";

export const addSkillsAndExperienceMutation = gql`
  mutation AddSkill($input: AddSkillInput!) {
    addSkill(input: $input) {
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
