import gql from "graphql-tag";
import { CompanyFragments, ErrorFragments } from "../../fragments";

export const loginCompanyMutation = gql`
  mutation LoginCompany($input: LoginCompanyInput!) {
    loginCompany(input: $input) {
      company {
        ...CompanyFragments_company
      }
      errors {
        ...ErrorFragments_error
      }
    }
  }
  ${CompanyFragments.company}
  ${ErrorFragments.error}
`;
