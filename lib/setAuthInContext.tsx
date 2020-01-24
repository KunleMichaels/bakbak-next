import { useEffect } from "react";
import { User } from "../controller";
import { APP_ACTIONS, useAppContext } from "../web/context/AppContext";

export const setUserInContext = (user: User | null) => {
  const [, appDispatch] = useAppContext();
  useEffect(() => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_USER,
      payload: user
    });
  }, []);
};

export const setAuthInContext = (user: User | null) => {
  const [, appDispatch] = useAppContext();
  useEffect(() => {
    appDispatch({
      type: APP_ACTIONS.LOGGED_USER,
      payload: user
    });
  }, []);
};
