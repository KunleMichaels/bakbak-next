// import PropTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";
import { ActionType, REGISTER_OPTION } from "../constants";

export interface AppState {
  loggedUser: any;
  loggedCompany: any;
  registerOption: string;
  blogTags: string[];
}

// interface AppStateLocalStorage {
//   me?: RegisterMutation_register_user;
// }

export interface AppContextProps {
  appContextState: AppState;
}
export const APP_ACTIONS = {
  LOGGED_USER: "LOGGED_USER",
  LOGGED_COMPANY: "LOGGED_COMPANY",
  REGISTER_OPTION: "REGISTER_OPTION",
  BLOG_TAG: "BLOG_TAG"
};

// let initialAppState = getLocalStorageItem(LOCAL_STORAGE_APP_CONTEXT);
let initialAppState: AppState = {
  loggedUser: undefined,
  loggedCompany: undefined,
  registerOption: REGISTER_OPTION.USER,
  blogTags: []
};
export { initialAppState };

const appReducer: React.Reducer<AppState, ActionType> = (
  state: AppState = initialAppState,
  action: ActionType
): AppState => {
  switch (action.type) {
    case APP_ACTIONS.LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload
      };
    case APP_ACTIONS.LOGGED_COMPANY:
      return {
        ...state,
        loggedCompany: action.payload
      };
    case APP_ACTIONS.REGISTER_OPTION:
      return {
        ...state,
        registerOption: action.payload
      };
    case APP_ACTIONS.BLOG_TAG:
      return {
        ...state,
        blogTags: action.payload
      };
    default:
      return state;
  }
};

export const AppContext = createContext<[AppState, React.Dispatch<ActionType>]>(
  [initialAppState, (_: any) => {}]
);

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <AppContext.Provider value={useReducer(appReducer, initialAppState)}>
    {children}
  </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);

// StateProvider.propTypes = {
//   /**
//    * @return {React.Node}
//    */
//   children: PropTypes.node.isRequired,

//   /**
//    * Object containing initial state value.
//    */
//   initialState: PropTypes.shape({}).isRequired,

//   /**
//    *
//    * @param {object} state
//    * @param {object} action
//    */
//   reducer: PropTypes.func.isRequired
// };
