import React, { useCallback, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppInputWithLabel } from "components/common";
import { LabelWithIcon, SuccessModal, UpdateQuestion } from "components";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ReadingActions from "redux/reading.redux";
import { ReadingService } from "services";
import { ApiConstant } from "const";
import { uuid } from "utils";

const UpdateButton = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, toggleOpen] = useReducer(
    (currentState, nextState) => nextState ?? !currentState
  );
  const { t: getLabel } = useTranslation();

  const [isSuccess, setIsSuccess] = useState(false);

  const readingsRedux = useSelector(
    ({ readingRedux }) => readingRedux.readings,
    shallowEqual
  );

  const onUpdate = () => {
    const currentReading = readingsRedux.find(({ _id }) => _id === data._id);
    ReadingService.updateReading(currentReading)
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
    const newReadings = readingsRedux.map((item) => {
      if (item._id === data._id) {
        return { ...item, ...newData };
      }
      return item;
    });
    dispatch(ReadingActions.updateReading(newReadings));
  };

  const onChangeQuestion = (newData, id) => {
    const newReadings = readingsRedux.map((item) => {
      if (item._id === data._id) {
        const newQuestion = item?.question?.map((question) => {
          if (question?._id === id) {
            return { ...question, ...newData };
          }
          return question;
        });
        return { ...item, question: newQuestion };
      }
      return item;
    });
    dispatch(ReadingActions.updateReading(newReadings));
  };

  const onCloseSuccessModal = () => {
    setIsSuccess(false);
    dispatch(ReadingActions.getReadingList());
  };

  const onAddQuestion = () => {
    const newReadings = readingsRedux.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          question: [
            ...item?.question,
            {
              _id: uuid(),
              title: "",
              answers: [
                { content: "", isTrue: false },
                { content: "", isTrue: false },
                { content: "", isTrue: false },
                { content: "", isTrue: false },
              ],
            },
          ],
        };
      }
      return item;
    });
    dispatch(ReadingActions.updateReading(newReadings));
  };

  const onRemoveQuestion = (id) => {
    const newReadings = readingsRedux.map((item) => {
      if (item._id === data._id) {
        const newQuestion = item?.question.filter(({ _id }) => _id !== id);
        return {
          ...item,
          question: newQuestion,
        };
      }
      return item;
    });
    dispatch(ReadingActions.updateReading(newReadings));
  };

  return (
    <>
      <AppButton onClick={() => toggleOpen(true)}>Cập nhật</AppButton>
      <AppDialog open={isOpen} classes={{ paper: classes.paper }}>
        <LabelWithIcon sx={{ mb: 2 }}>Sửa</LabelWithIcon>
        <Stack>
          <AppInputWithLabel
            label={getLabel("TXT_TITLE")}
            inputProps={{
              value: data?.title,
              className: classes.input,
              placeholder: getLabel("P_TITLE"),
              onChange: (e) => onChangeData({ title: e.target.value }),
            }}
            labelProps={{ className: classes.label }}
          />
          <AppInputWithLabel
            label={getLabel("TXT_CONTENT")}
            labelProps={{ className: classes.label }}
            inputProps={{
              value: data?.content,
              multiline: true,
              rows: 4,
              placeholder: getLabel("P_CONTENT"),
              onChange: (e) => onChangeData({ content: e.target.value }),
            }}
            sx={{ mt: 2 }}
          />
          {data?.question?.map((item, index) => {
            return (
              <UpdateQuestion
                key={index}
                questionNumber={index + 1}
                data={item}
                onChangeQuestion={onChangeQuestion}
                onRemoveQuestion={onRemoveQuestion}
              />
            );
          })}
          <AppButton sx={{ mt: 2 }} onClick={onAddQuestion}>
            Thêm câu hỏi
          </AppButton>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", mt: 3 }}
        >
          <AppButton
            onClick={() => {
              toggleOpen(false);
              dispatch(ReadingActions.getReadingList());
            }}
            sx={{ width: 150 }}
            classes={{ contained: classes.deleteBtn }}
          >
            Huỷ
          </AppButton>
          <AppButton onClick={onUpdate} sx={{ width: 150 }}>
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
}));
