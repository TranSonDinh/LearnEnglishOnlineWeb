import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppTypography } from "./common";
import LabelWithIcon from "./LabelWithIcon";
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const DeleteModal = ({ open, onClose, onClick, ...otherProps }) => {
  const classes = useStyles();

  return (
    <AppDialog open={open} {...otherProps}>
      <LabelWithIcon>Xoá!</LabelWithIcon>
      <AppTypography sx={{ my: 3 }}>
        Bạn có chắc chắn muốn xoá không ?
      </AppTypography>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <AppButton onClick={onClose} classes={{ contained: classes.deleteBtn }}>
          Huỷ
        </AppButton>
        <AppButton onClick={onClick}>Xoá</AppButton>
      </Stack>
    </AppDialog>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(DeleteModal);

const useStyles = makeStyles((theme) => ({
  deleteBtn: {
    marginLeft: theme.spacing(2),
    color: "#FFFFFF",
    background: theme.palette.error.main,
    boxShadow: `0 5px 0 ${theme.palette.error.dark}`,
    "&:hover": {
      background: theme.palette.error.main,
      boxShadow: `0 5px 0 ${theme.palette.error.dark}`,
      opacity: 0.9,
    },
  },
}));
