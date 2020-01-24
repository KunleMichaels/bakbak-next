import gql from "graphql-tag";
import { UserFragments } from "../../fragments";

export const meQuery = gql`
  query Me {
    me {
      ...UserFragments_user
    }
  }
  ${UserFragments.user}
`;
