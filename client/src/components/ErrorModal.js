import React from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppTypography } from "./common";
import LabelWithIcon from "./LabelWithIcon";
import { makeStyles } from "@mui/styles";

const ErrorModal = ({ onClose, message, title, open }) => {
  const classes = useStyles();

  return (
    <AppDialog open={open} classes={{ paper: classes.paper }}>
      <LabelWithIcon>{title || "Lỗi!"}</LabelWithIcon>
      <AppTypography sx={{ my: 3, textAlign: "center" }}>
        {message || "Có lỗi vui lòng thử lại!"}
      </AppTypography>
      <AppButton onClick={onClose}>Đóng</AppButton>
    </AppDialog>
  );
};

ErrorModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  title: PropTypes.string,
};

export default ErrorModal;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
  },
}));
