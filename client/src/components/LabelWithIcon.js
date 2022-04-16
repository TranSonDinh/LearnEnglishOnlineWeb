import React, { memo } from "react";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { AppTypography } from "./common";

const LabelWithIcon = ({
  startAdornment,
  endAdornment,
  labelProps,
  children,
  ...otherProps
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      {...otherProps}
    >
      {Boolean(startAdornment) && startAdornment}
      <AppTypography
        variant={{ xs: "subtitle1", sm: "h3" }}
        fontWeight={700}
        {...labelProps}
      >
        {children}
      </AppTypography>
      {Boolean(endAdornment) && endAdornment}
    </Stack>
  );
};

export default memo(LabelWithIcon);

LabelWithIcon.propTypes = {
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  labelProps: PropTypes.object,
};

LabelWithIcon.defaultProps = {
  labelProps: {},
};
