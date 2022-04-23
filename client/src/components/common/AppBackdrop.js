import React, { memo } from "react";
import PropTypes from "prop-types";
import { Backdrop } from "@mui/material";

const AppBackdrop = ({ sx, ...otherProps }) => {
  return (
    <Backdrop
      sx={{
        color: "rgba(29, 29, 39, 0.2)",
        filter: "blur(4px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...sx,
      }}
      {...otherProps}
    />
  );
};

AppBackdrop.propTypes = {
  sx: PropTypes.object,
};

AppBackdrop.defaultProps = {
  sx: {},
};

export default memo(AppBackdrop);
