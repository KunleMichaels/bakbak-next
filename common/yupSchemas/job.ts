import * as yup from "yup";

export const titleValidation = yup.string().required();

export const detailsValidation = yup.string().required();

export const createJobValidationSchema = yup.object().shape({
  title: titleValidation,
  details: detailsValidation
});
