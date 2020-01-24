import { NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { User, viewProfileQuery } from "../../../../controller";

export const viewProfileController = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  userName: string
): Promise<{ user: User | null; errors: Error[] | null }> =>
  apolloClient
    .query({
      query: viewProfileQuery,
      variables: {
        userName
      }
    })
    .then(({ data }) => {
      return { ...data.viewProfile };
    })
    .catch(() => {
      return {
        user: null,
        errors: [{ path: "viewProfileQuery", message: "some error occured" }]
      };
    });
