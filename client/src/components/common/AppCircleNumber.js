import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import clsx from "clsx";

const AppCircleNumber = ({ className, isSelected, onClick, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.root, className, {
        [classes.selected]: isSelected,
      })}
      onClick={onClick}
      {...otherProps}
    />
  );
};

AppCircleNumber.propTypes = {
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(AppCircleNumber);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 32,
    height: 32,
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: "50%",
    color: theme.palette.common.black,
    fontWeight: 600,
    padding: 0,
    margin: theme.spacing(0, 3, 1, 0),
  },
  selected: {
    background: theme.palette.grey[200],
    "&:hover": {
      background: theme.palette.grey[200],
    },
  },
}));
