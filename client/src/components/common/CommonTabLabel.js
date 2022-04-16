import React, { memo } from "react";
import { Box } from "@mui/material";
import { AppTypography as Typography } from "components/common";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const CommonTabLabel = ({ label, anchorEl, ...otherProps }) => {
  const classes = useStyles({ anchorEl });

  return (
    <Box display="flex" alignItems="center" {...otherProps}>
      <Typography fontWeight={600}>{label}</Typography>
    </Box>
  );
};

export default memo(CommonTabLabel);

CommonTabLabel.propTypes = {
  label: PropTypes.string,
  hasDropdown: PropTypes.bool,
  anchorEl: PropTypes.any,
};

const useStyles = makeStyles({
  dropdownIcon: {
    transform: ({ anchorEl }) => anchorEl !== null && "rotate(180deg)",
  },
});
