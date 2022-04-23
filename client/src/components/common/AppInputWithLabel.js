import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import AppTypography from "./AppTypography";
import AppInput from "./AppInput";

const AppInputWithLabel = ({
  inputProps,
  labelProps,
  label,
  ...otherProps
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} {...otherProps}>
      <AppTypography variant="subtitle2" {...labelProps}>
        {label}
      </AppTypography>
      <AppInput {...inputProps} />
    </Stack>
  );
};

AppInputWithLabel.propTypes = {
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  label: PropTypes.string,
};

AppInputWithLabel.default = {
  inputProps: {},
  labelProps: {},
};

export default AppInputWithLabel;
