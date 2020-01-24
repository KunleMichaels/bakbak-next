import * as yup from "yup";
import { emailValidation } from "./common";

export const USER_VALIDATIONS = {
  USER_NAME_MIN: 5,
  USER_NAME_MAX: 100
};

export const USER_ERR_MESSAGES = {
  FORGOT_PASSWORD_ACCOUNT_LOCKED: "account is locked",
  DUPLICATE_USER_NAME: "User Name already exists",
  USER_NOT_FOUND: "could not find user with that email",
  USER_NOT_EXIST: "User does not exist anymore",
  USER_NOT_AUTHORISED: "user not authorised to make specified changes",
  USER_NAME_NOT_VALID: `User name should be between ${USER_VALIDATIONS.USER_NAME_MIN} and 
		${USER_VALIDATIONS.USER_NAME_MAX} characters`
};

export const userNameValidation = yup
  .string()
  .required()
  .min(USER_VALIDATIONS.USER_NAME_MIN, USER_ERR_MESSAGES.USER_NAME_NOT_VALID)
  .max(USER_VALIDATIONS.USER_NAME_MAX, USER_ERR_MESSAGES.USER_NAME_NOT_VALID);

export const userValidationSchema = yup.object().shape({
  userName: userNameValidation
});

export const emailUserNameValidationSchema = yup.object().shape({
  email: emailValidation,
  userName: userNameValidation
});
