export interface ActionType {
  type: string;
  payload: any;
}

export const REGISTER_OPTION = {
  USER: "User",
  COMPANY: "Company"
};

export const USER_REGISTRATION_STEPS = ["Register", "Personal details", "Skills and experience"];
export const COMPANY_REGISTRATION_STEPS = ["Register", "Company details"];
