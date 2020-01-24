import { useApolloClient } from "@apollo/react-hooks";
import React from "react";
import { ME, ROUTE_NAMES } from "../../../../common";
import { LoginInput, useLoginMutation, User } from "../../../../controller";
import redirect from "../../../../lib/redirect";
import { APP_ACTIONS, useAppContext } from "../../../context/AppContext";
import { LoginUserView } from "./LoginUserView";

export const LoginUserController = () => {
  const [, appDispatch] = useAppContext();
  const [loginMutation] = useLoginMutation();
  const client = useApolloClient();

  const onComplete = (user: User | null) => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_USER,
      payload: user
    });
    if (user) {
      client.cache.reset().then(() => {
        redirect(null, `${ROUTE_NAMES.USER_VIEW_PROFILE}/${ME}`);
      });
    } else {
      // TODO: did not get any response back.
    }
  };

  const onSubmit = async (input: LoginInput) => {
    const { data } = await loginMutation({ variables: { input } });
    if (data && data.login) {
      return data.login;
    } else {
      return null;
    }
  };

  return <LoginUserView submit={onSubmit} onComplete={onComplete} />;
};
