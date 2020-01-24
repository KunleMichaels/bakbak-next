import * as yup from "yup";
import {
  emailValidation,
  linkedInURLValidation,
  passwordValidation
} from "./common";

export const COMPANY_VALIDATIONS = {
  COMPANY_NAME_MIN: 5,
  COMPANY_NAME_MAX: 100
};

export const COMPANY_ERR_MESSAGES = {
  USER_NOT_FOUND: "could not find user with that email",
  COMPANY_NAME_NOT_EXIST: "Company does not exist anymore",
  COMPANY_NOT_AUTHORISED: "Company not authorised to make specified changes",
  COMPANY_NAME_NOT_VALID: `Company name should be between ${COMPANY_VALIDATIONS.COMPANY_NAME_MIN} and 
		${COMPANY_VALIDATIONS.COMPANY_NAME_MAX} characters`
};

export const companyNameValidation = yup
  .string()
  .required()
  .min(
    COMPANY_VALIDATIONS.COMPANY_NAME_MIN,
    COMPANY_ERR_MESSAGES.COMPANY_NAME_NOT_VALID
  )
  .max(
    COMPANY_VALIDATIONS.COMPANY_NAME_MAX,
    COMPANY_ERR_MESSAGES.COMPANY_NAME_NOT_VALID
  );

export const companyRegisterValidationSchema = yup.object().shape({
  email: emailValidation,
  companyName: companyNameValidation,
  password: passwordValidation
});

export const companyDetailsValidation = yup
  .string()
  .required("Company Details are required");

export const companyDetailsValidationSchema = yup.object().shape({
  companyDetails: companyDetailsValidation,
  linkedinUrl: linkedInURLValidation
});
