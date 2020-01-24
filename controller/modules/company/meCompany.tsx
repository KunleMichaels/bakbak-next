import gql from "graphql-tag";
import { CompanyFragments } from "../../fragments";

export const meCompanyQuery = gql`
  query MeCompany {
    meCompany {
      ...CompanyFragments_company
    }
  }
  ${CompanyFragments.company}
`;
