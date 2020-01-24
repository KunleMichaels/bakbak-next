import { ROUTE_NAMES } from "../../common";
import { logoutMutation } from "../../controller";
import { withApollo } from "../../lib/apollo";
import redirect from "../../lib/redirect";
import { setUserInContext } from "../../lib/setAuthInContext";
import { MyContext } from "../../web/types/MyContext";

const Logout = ({ loggedUser }: MyContext) => {
  setUserInContext(loggedUser);
  redirect(null, ROUTE_NAMES.LOGIN);
  return null;
};

Logout.getInitialProps = async (context: MyContext) => {
  await context.apolloClient.mutate({ mutation: logoutMutation });
  await context.apolloClient.resetStore();
  redirect(context, ROUTE_NAMES.LOGIN);
  return {
    loggedUser: null
  };
};

export default withApollo(Logout);
