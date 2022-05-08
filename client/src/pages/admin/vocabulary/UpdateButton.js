import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import {
  AppButton,
  AppDialog,
  AppInputWithLabel,
  AppTypography,
} from "components/common";
import { LabelWithIcon, SuccessModal } from "components";
import { makeStyles } from "@mui/styles";
import { Input, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import VocabularyActions from "redux/vocabulary.redux";
import { VocabularyService } from "services";
import { ApiConstant } from "const";

const UpdateButton = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, toggleOpen] = useReducer(
    (currentState, nextState) => nextState ?? !currentState
  );

  const [isSuccess, setIsSuccess] = useState(false);

  const vocabularyListRedux = useSelector(
    ({ vocabularyRedux }) => vocabularyRedux.vocabulary
  );

  const onUpdate = () => {
    const currentVocabulary = vocabularyListRedux.find(
      ({ _id }) => _id === data._id
    );
    VocabularyService.updateVocabulary(currentVocabulary)
      .then((res) => {
        if (res.status === ApiConstant.STT_OK) {
          setIsSuccess(true);
          toggleOpen(false);
        }
      })
      .catch((error) => {
        window.isDebug && console.log(error);
      });
  };

  const onChangeData = (newData) => {
    const newVocabulary = vocabularyListRedux.map((item) => {
      if (item._id === data._id) {
        return { ...item, ...newData };
      }
      return item;
    });
    dispatch(VocabularyActions.updateVocabulary(newVocabulary));
  };

  const onCloseSuccessModal = () => {
    setIsSuccess(false);
    dispatch(VocabularyActions.getVocabularyList());
  };

  const onChangeFile = (e) => {
    const files = e.target.files;
    onChangeData({ audioSrc: files[0]?.name });
  };

  return (
    <>
      <AppButton onClick={() => toggleOpen(true)}>Cập nhật</AppButton>
      <AppDialog open={isOpen} classes={{ paper: classes.paper }}>
        <LabelWithIcon sx={{ mb: 2 }}>Sửa</LabelWithIcon>
        <Stack>
          <AppInputWithLabel
            label="Từ"
            inputProps={{
              value: data?.title,
              className: classes.input,
              placeholder: "Nhập từ",
              onChange: (e) => onChangeData({ title: e.target.value }),
            }}
            labelProps={{ className: classes.label }}
            sx={{ justifyContent: "space-between", mt: 2 }}
          />
          <AppInputWithLabel
            label="Phiên âm"
            inputProps={{
              value: data?.spelling,
              className: classes.input,
              placeholder: "Nhập phiên âm",
              onChange: (e) => onChangeData({ spelling: e.target.value }),
            }}
            labelProps={{ className: classes.label }}
            sx={{ justifyContent: "space-between", mt: 2 }}
          />
          <AppInputWithLabel
            label="Ví dụ"
            labelProps={{ className: classes.label }}
            inputProps={{
              value: data?.example,
              multiline: true,
              className: classes.input,
              rows: 4,
              placeholder: "Nhập ví dụ",
              onChange: (e) => onChangeData({ example: e.target.value }),
            }}
            sx={{
              mt: 2,
              justifyContent: "space-between",
            }}
          />
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 2 }}>
            <AppTypography fontWeight={600}>Chọn file âm thanh:</AppTypography>
            <Input
              id="contained-button-file"
              type="file"
              inputProps={{
                accept: ".mp3",
              }}
              onChange={onChangeFile}
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", mt: 3 }}
        >
          <AppButton
            onClick={() => {
              toggleOpen(false);
              dispatch(VocabularyActions.getVocabularyList());
            }}
            sx={{ width: 150 }}
            classes={{ contained: classes.deleteBtn }}
          >
            Huỷ
          </AppButton>
          <AppButton sx={{ width: 150 }} onClick={onUpdate}>
            Lưu
          </AppButton>
        </Stack>
      </AppDialog>
      <SuccessModal
        open={isSuccess}
        description="Bạn đã sửa thành công!"
        onClose={onCloseSuccessModal}
      />
    </>
  );
};

UpdateButton.propTypes = {};

export default UpdateButton;

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
  paper: {
    width: 600,
  },
  input: {
    flex: "unset",
    width: 420,
  },
}));
