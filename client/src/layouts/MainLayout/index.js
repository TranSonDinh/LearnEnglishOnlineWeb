import React, { memo, forwardRef } from "react";
import { Box, NoSsr } from "@mui/material";

const MainLayout = forwardRef(({ children }, ref) => {
  return (
    <Box sx={{ height: "100%", overflowY: "auto" }}>
      <NoSsr>{children}</NoSsr>
    </Box>
  );
});

MainLayout.propTypes = {};

MainLayout.defaultProps = {};

export default memo(MainLayout);
