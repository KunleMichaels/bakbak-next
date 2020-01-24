import gql from "graphql-tag";
import { CompanyFragments, ErrorFragments } from "../../fragments";

export const addCompanyDetailsMutation = gql`
  mutation AddCompanyDetails($input: CompanyDetailsInput!) {
    addCompanyDetails(input: $input) {
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
