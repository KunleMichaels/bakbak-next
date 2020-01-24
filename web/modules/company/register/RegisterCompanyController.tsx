import React from "react";
import { ROUTE_NAMES } from "../../../../common";
import {
  Company,
  RegisterCompanyInput,
  useRegisterCompanyMutation
} from "../../../../controller";
import redirect from "../../../../lib/redirect";
import { APP_ACTIONS, useAppContext } from "../../../context/AppContext";
import { RegisterCompanyView } from "./RegisterCompanyView";

export const RegisterCompanyController = () => {
  const [, appDispatch] = useAppContext();
  const [registerCompanyMutation] = useRegisterCompanyMutation();
  const onComplete = (company: Company) => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_COMPANY,
      payload: company
    });
    redirect(null, ROUTE_NAMES.COMPANY_ADD_DETAILS);
  };

  const onSubmit = async (input: RegisterCompanyInput) => {
    const { data } = await registerCompanyMutation({ variables: { input } });
    if (data && data.registerCompany) {
      return data.registerCompany;
    } else {
      return null;
    }
  };

  return <RegisterCompanyView submit={onSubmit} onComplete={onComplete} />;
};
