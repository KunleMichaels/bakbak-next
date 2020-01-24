import gql from "graphql-tag";
import { SkillFragments } from "./skill";

export const UserFragments = {
  user: gql`
    fragment UserFragments_user on User {
      id
      email
      userName
      fullName
      pictureUrl
      linkedinUrl
      forgotPasswordLocked
      confirmed
      reported
      blocked
      skills {
        ...SkillFragments_skillG
      }
      createdAt
      updatedAt
    }
    ${SkillFragments.skillG}
  `
};
