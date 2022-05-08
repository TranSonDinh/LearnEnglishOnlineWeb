import React, { memo } from "react";
import PropTypes from "prop-types";
import { Dialog, DialogTitle, IconButton, Typography } from "@mui/material";
import AppPaper from "./AppPaper";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import AppBackdrop from "./AppBackdrop";

const AppDialog = ({
  title,
  closeIcon,
  onClose,
  open,
  classes,
  children,
  sx,
  variantTitle,
  ...otherProps
}) => {
  const defaultClasses = useStyles();

  return (
    <Dialog
      BackdropComponent={AppBackdrop}
      classes={{ paper: clsx(defaultClasses.paper, classes.paper) }}
      open={open}
      {...otherProps}
    >
      {Boolean(title) && (
        <DialogTitle
          component={Typography}
          variant={variantTitle}
          sx={{
            mb: 2,
            textAlign: "center",
            padding: 0,
            fontWeight: 700,
            ...sx,
          }}
        >
          {title}
        </DialogTitle>
      )}
      {children}
      {closeIcon && (
        <IconButton
          classes={{
            root: defaultClasses.closeButton,
            icon: defaultClasses.icon,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Dialog>
  );
};

AppDialog.propTypes = {
  title: PropTypes.string,
  closeIcon: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  classes: PropTypes.object,
  sx: PropTypes.object,
  variantTitle: PropTypes.string,
};

AppDialog.defaultProps = {
  classes: {},
  variantTitle: "subtitle1",
};

export default memo(AppDialog);

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3, 5),
    position: "relative",
    background: theme.palette.common.white,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(2.5),
    top: theme.spacing(2.5),
    color: "#000",
  },
  icon: {
    width: 18,
    height: 18,
  },
}));
