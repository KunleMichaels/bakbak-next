import gql from "graphql-tag";

export const TagFragments = {
  tagTG: gql`
    fragment TagFragments_tagTG on TagTG {
      tagId
      tagName
    }
  `
};
