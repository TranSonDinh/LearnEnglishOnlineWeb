import React, { memo } from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";

const AppCard = ({ imageSrc, children, ...otherProps }) => {
  return (
    <Stack
      direction="row"
      sx={{
        height: 200,
        width: "60%",
        padding: 3,
        background: "#f2f2f2",
        borderRadius: 3,
      }}
      {...otherProps}
    >
      {Boolean(imageSrc) && (
        <Box
          component="img"
          src={imageSrc}
          sx={{ height: "100%", width: "200px", mr: 3 }}
        />
      )}
      <Stack
        justifyContent="space-between"
        sx={{ flexGrow: 1, alignItems: "flex-start" }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

AppCard.propTypes = {
  imageSrc: PropTypes.string,
};

export default memo(AppCard);
