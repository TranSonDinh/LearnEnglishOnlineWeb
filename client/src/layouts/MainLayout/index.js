import React, { memo, forwardRef } from "react";
import { NoSsr } from "@mui/material";

const MainLayout = forwardRef(({ children }, ref) => {
  return <NoSsr>{children}</NoSsr>;
});

MainLayout.propTypes = {};

MainLayout.defaultProps = {};

export default memo(MainLayout);
