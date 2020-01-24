import gql from "graphql-tag";
import { CompanyFragments, ErrorFragments } from "../../fragments";

export const registerCompanyMutation = gql`
  mutation RegisterCompany($input: RegisterCompanyInput!) {
    registerCompany(input: $input) {
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
