import React, { memo, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { AppButton } from "components/common";
import { makeStyles } from "@mui/styles";
import { DeleteModal, SuccessModal } from "components";
import { ReadingService } from "services";
import { ApiConstant } from "const";
import { useDispatch } from "react-redux";
import ReadingActions from "redux/reading.redux";

const DeleteButton = ({ id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, toggleIsOpen] = useReducer(
    (currentStatus, nextStatus) => nextStatus ?? !currentStatus,
    false
  );
  const [isSuccess, setIsSuccess] = useState(false);

  const onDelete = async () => {
    toggleIsOpen(false);
    const res = await ReadingService.deleteReading({ id: id });
    if (res.status === ApiConstant.STT_OK) {
      setIsSuccess(true);
    }
  };

  const onCloseSuccessModal = () => {
    setIsSuccess(false);
    dispatch(ReadingActions.getReadingList());
  };

  return (
    <>
      <AppButton
        onClick={() => {
          toggleIsOpen(true);
        }}
        classes={{ contained: classes.deleteBtn }}
      >
        Xoá
      </AppButton>
      <DeleteModal
        open={isOpen}
        onClose={() => {
          toggleIsOpen(false);
        }}
        onClick={onDelete}
      />
      <SuccessModal
        open={isSuccess}
        description="Bạn đã xoá thành công!"
        onClose={onCloseSuccessModal}
      />
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(DeleteButton);

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
