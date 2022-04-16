import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppTypography } from "./common";

const ReadingContainer = ({ children, ...otherProps }) => {
  return (
    <AppTypography
      sx={{
        width: "60%",
        background: "#ecf9ff",
        px: 1,
        py: 2,
        borderRadius: 2,
        border: "2px solid #e5e5e5",
      }}
      {...otherProps}
    >
      {children}
    </AppTypography>
  );
};

ReadingContainer.propTypes = {};

export default memo(ReadingContainer);
