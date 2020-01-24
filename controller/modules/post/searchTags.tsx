import gql from "graphql-tag";

export const searchTagsQuery = gql`
  query SearchTags($tagName: String!) {
    searchTags(tagName: $tagName) {
      id
      name
    }
  }
`;
