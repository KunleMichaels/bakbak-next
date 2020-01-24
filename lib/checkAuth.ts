import { NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { AuthPayload, checkAuthQuery } from "../controller";

export const checkAuth = (
  apolloClient: ApolloClient<NormalizedCacheObject>
): Promise<{ authPayload: AuthPayload | null }> =>
  apolloClient
    .query({
      query: checkAuthQuery,
      fetchPolicy: "network-only"
    })
    .then(({ data }) => {
      if (data && data.checkAuth) {
        return { authPayload: data.checkAuth };
      }
      return { authPayload: null };
    })
    .catch(() => {
      return { authPayload: null };
    });
