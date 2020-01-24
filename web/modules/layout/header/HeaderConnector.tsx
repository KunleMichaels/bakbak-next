import React from "react";
import { ME, ROUTE_NAMES } from "../../../../common";
import { useAppContext } from "../../../context/AppContext";
import HeaderAuthView from "./HeaderAuthView";
import HeaderLoggedView from "./HeaderLoggedView";
import HeaderView from "./HeaderView";

const HeaderConnector = () => {
  const [{ loggedUser, loggedCompany }] = useAppContext();

  if (loggedUser === undefined && loggedCompany === undefined) {
    return <HeaderView />;
  } else if (loggedUser) {
    const homeLink = loggedUser
      ? `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`
      : ROUTE_NAMES.HOME;
    return (
      <HeaderLoggedView
        homeLink={homeLink}
        logoutLink={ROUTE_NAMES.USER_LOGOUT}
        blogLink={ROUTE_NAMES.BLOG}
        profileLink={homeLink}
        confirmed={loggedUser.confirmed}
      />
    );
  } else if (loggedCompany) {
    return (
      <HeaderLoggedView
        homeLink={`${ROUTE_NAMES.COMPANY_VIEW_PROFILE}/${ME}`}
        logoutLink={ROUTE_NAMES.COMPANY_LOGOUT}
        profileLink={`${ROUTE_NAMES.COMPANY_VIEW_PROFILE}/${ME}`}
        confirmed={loggedCompany.confirmed}
        blogLink={ROUTE_NAMES.CREATE_BLOG}
      />
    );
  } else {
    return <HeaderAuthView />;
  }
};

export default HeaderConnector;
