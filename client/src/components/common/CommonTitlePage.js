import React, { memo } from "react";
import PropTypes from "prop-types";
import AppTypography from "./AppTypography";

const CommonTitlePage = ({ ...otherProps }) => {
  return (
    <AppTypography
      variant="h1"
      fontWeight={700}
      sx={{ textTransform: "capitalize", my: 4 }}
      {...otherProps}
    />
  );
};

CommonTitlePage.propTypes = {};

export default memo(CommonTitlePage);
