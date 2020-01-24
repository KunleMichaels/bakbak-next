import React from "react";
import { ROUTE_NAMES } from "../../../../common";
import { User, useRegisterMutation } from "../../../../controller";
import redirect from "../../../../lib/redirect";
import { APP_ACTIONS, useAppContext } from "../../../context/AppContext";
import { RegisterUserView } from "./RegisterUserView";

export const RegisterUserController = () => {
  const [, appDispatch] = useAppContext();
  const [registerMutation] = useRegisterMutation();
  const onComplete = (user: User) => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_USER,
      payload: user
    });
    redirect(null, ROUTE_NAMES.USER_ADD_PERSONAL_DETAILS);
  };

  const onSubmit = async (input: any) => {
    const { data } = await registerMutation({ variables: { input } });
    if (data && data.register) {
      return data.register;
    } else {
      return null;
    }
  };

  return <RegisterUserView submit={onSubmit} onComplete={onComplete} />;
};
