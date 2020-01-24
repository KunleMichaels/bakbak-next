import gql from "graphql-tag";

export const searchSkillsQuery = gql`
  query SearchSkills($skillName: String!) {
    searchSkills(skillName: $skillName) {
      id
      name
    }
  }
`;
