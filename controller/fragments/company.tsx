import gql from "graphql-tag";

export const CompanyFragments = {
  company: gql`
    fragment CompanyFragments_company on Company {
      id
      email
      companyName
      companyDetails
      pictureUrl
      linkedinUrl
      forgotPasswordLocked
      confirmed
      reported
      blocked
    }
  `
};
