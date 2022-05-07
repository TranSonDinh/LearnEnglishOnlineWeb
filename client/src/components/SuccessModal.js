import React from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppTypography } from "./common";
import LabelWithIcon from "./LabelWithIcon";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";

const SuccessModal = ({ title, description, open, onClose, ...otherProps }) => {
  const classes = useStyles();

  return (
    <AppDialog open={open} classes={{ paper: classes.paper }} {...otherProps}>
      <LabelWithIcon>{title || "Thành công!"}</LabelWithIcon>
      <AppTypography sx={{ my: 3, textAlign: "center" }}>
        {description}
      </AppTypography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <AppButton onClick={onClose}>Đóng</AppButton>
      </Stack>
    </AppDialog>
  );
};

SuccessModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 320,
    height: 190,
  },
}));
