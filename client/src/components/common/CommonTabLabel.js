import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { AppTypography as Typography } from "components/common";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const CommonTabLabel = ({ label, anchorEl, startIcon, ...otherProps }) => {
  const classes = useStyles({ anchorEl });

  return (
    <Stack spacing={1} direction="row" alignItems="center" {...otherProps}>
      {Boolean(startIcon) && startIcon}
      <Typography fontWeight={600}>{label}</Typography>
    </Stack>
  );
};

export default memo(CommonTabLabel);

CommonTabLabel.propTypes = {
  label: PropTypes.string,
  hasDropdown: PropTypes.bool,
  anchorEl: PropTypes.any,
  startIcon: PropTypes.node,
};

const useStyles = makeStyles({
  dropdownIcon: {
    transform: ({ anchorEl }) => anchorEl !== null && "rotate(180deg)",
  },
});
