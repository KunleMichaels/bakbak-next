import { ME, ROUTE_NAMES } from "../common";
import { User } from "../controller";
import { MyContext } from "../web/types/MyContext";
import { checkAuth } from "./checkAuth";
import { checkUserLoggedIn } from "./checkUserLoggedIn";
import redirect from "./redirect";

export const redirectUser = async (context: MyContext) => {
  const { apolloClient } = context;
  const { loggedUser } = await checkUserLoggedIn(apolloClient);
  redirectUserRoute(context, loggedUser);
  return { loggedUser };
};

const redirectUserRoute = (
  context: MyContext,
  loggedUser: User | null | undefined
) => {
  const { pathname, query } = context;

  if (!loggedUser) {
    if (pathname === ROUTE_NAMES.LOGIN || pathname === ROUTE_NAMES.HOME) {
    } else {
      redirect(context, ROUTE_NAMES.LOGIN);
    }
  } else if (loggedUser.fullName) {
    // FIXME: something is not right here in the logic. Need to recheck.
    if (
      query.query === ME ||
      pathname === `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`
    ) {
    } else if (query.query) {
      redirect(context, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${query.query}`);
    } else {
      redirect(context, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`);
    }
  }
  // TODO: remove the following comment
  // else if (!loggedUser.fullName && loggedUser.userName) {
  //   if (pathname === ROUTE_NAMES.USER_ADD_PERSONAL_DETAILS) {
  //   } else {
  //     redirect(context, ROUTE_NAMES.USER_ADD_PERSONAL_DETAILS);
  //   }
  // }
};

export const redirectAuth = async (context: MyContext) => {
  const { authPayload } = await checkAuth(context.apolloClient);
  if (authPayload) {
    const { loggedUser } = authPayload;
    if (loggedUser) {
      redirectUserRoute(context, loggedUser);
    }
    return { loggedUser };
  } else {
    return { loggedUser: null };
  }
};
