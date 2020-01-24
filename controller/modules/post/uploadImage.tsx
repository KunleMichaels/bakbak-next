import gql from "graphql-tag";
import { ErrorFragments } from "../../fragments";

export const uploadImageMutation = gql`
  mutation UploadImage($input: UploadImageInput!) {
    uploadImage(input: $input) {
      filename
      errors {
        ...ErrorFragments_error
      }
    }
  }
  ${ErrorFragments.error}
`;
