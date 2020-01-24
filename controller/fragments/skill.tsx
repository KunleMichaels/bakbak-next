import gql from "graphql-tag";

export const SkillFragments = {
  skillG: gql`
    fragment SkillFragments_skillG on SkillG {
      skillId
      skillName
      level
      oldSkill
    }
  `
};
