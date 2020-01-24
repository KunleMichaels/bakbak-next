import gql from "graphql-tag";

export const ErrorFragments: any = {
  error: gql`
    fragment ErrorFragments_error on Error {
      path
      message
    }
  `
};
