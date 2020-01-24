import gql from "graphql-tag";

export const CursorFragments = {
  cursor: gql`
    fragment CursorFragments_cursor on CursorPayload {
      id
      date
      score
    }
  `
};
