import { IconButton, InputAdornment } from "@material-ui/core";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Field } from "formik";
import React, { useState } from "react";
import InputField from "./InputField";

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Field
      name="password"
      label="Password"
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      required={true}
      fullWidth={true}
      as={InputField}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Toggle password visibility"
            onClick={toggleShowPassword}
          >
            {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
