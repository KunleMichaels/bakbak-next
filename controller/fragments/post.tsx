import gql from "graphql-tag";
import { TagFragments } from "./tag";
import { UserFragments } from "./user";

export const PostFragments = {
  post: gql`
    fragment PostFragments_post on Post {
      id
      title
      slug
      details
      pictureUrl
      views
      authorId
      author {
        ...UserFragments_user
      }
      tags {
        ...TagFragments_tagTG
      }
      createdAt
      updatedAt
    }
    ${UserFragments.user}
    ${TagFragments.tagTG}
  `
};
