import { useApolloClient } from "@apollo/react-hooks";
import React from "react";
import { ROUTE_NAMES } from "../../../../common";
import {
  Company,
  LoginCompanyInput,
  useLoginCompanyMutation
} from "../../../../controller";
import redirect from "../../../../lib/redirect";
import { APP_ACTIONS, useAppContext } from "../../../context/AppContext";
import { LoginCompanyView } from "./LoginCompanyView";

export const LoginCompanyController = () => {
  const [, appDispatch] = useAppContext();
  const [loginCompanyMutation] = useLoginCompanyMutation();
  const client = useApolloClient();

  const onComplete = (company: Company) => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_COMPANY,
      payload: company
    });
    if (company) {
      client.cache.reset().then(() => {
        redirect(null, ROUTE_NAMES.COMPANY_HOME);
      });
    } else {
      // TODO: did not get any response back.
    }
  };

  const onSubmit = async (input: LoginCompanyInput) => {
    const { data } = await loginCompanyMutation({ variables: { input } });
    if (data && data.loginCompany) {
      return data.loginCompany;
    } else {
      return null;
    }
  };

  return <LoginCompanyView submit={onSubmit} onComplete={onComplete} />;
};
