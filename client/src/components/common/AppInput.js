import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import clsx from "clsx";

const AppInput = ({ placeholder, className, ...otherProps }) => {
  const classes = useStyles();

  return (
    <TextField
      placeholder={placeholder}
      fullWidth
      required
      className={clsx(classes.input, className)}
      {...otherProps}
    />
  );
};

AppInput.propTypes = {};

export default memo(AppInput);

const useStyles = makeStyles((theme) => ({
  input: {
    background: theme.palette.grey.main,
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `2px solid ${theme.palette.grey[100]}`,
        borderRadius: theme.spacing(2),
      },
      "&:hover fieldset": {
        border: `2px solid ${theme.palette.grey[200]}`,
      },
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.grey[200]}`,
      },
    },
  },
}));
