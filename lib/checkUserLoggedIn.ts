import { NormalizedCacheObject } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { meQuery, User } from "../controller";

export const checkUserLoggedIn = (
  apolloClient: ApolloClient<NormalizedCacheObject>
): Promise<{ loggedUser: User | null }> =>
  apolloClient
    .query({
      query: meQuery
    })
    .then(({ data }) => {
      if (data && data.me) {
        return { loggedUser: data.me };
      }
      return { loggedUser: null };
    })
    .catch(() => {
      return { loggedUser: null };
    });
