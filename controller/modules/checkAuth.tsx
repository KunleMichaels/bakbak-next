import gql from "graphql-tag";
import { CompanyFragments, UserFragments } from "../fragments";

export const checkAuthQuery = gql`
  query CheckAuth {
    checkAuth {
      loggedUser {
        ...UserFragments_user
      }
      loggedCompany {
        ...CompanyFragments_company
      }
    }
  }
  ${UserFragments.user}
  ${CompanyFragments.company}
`;
