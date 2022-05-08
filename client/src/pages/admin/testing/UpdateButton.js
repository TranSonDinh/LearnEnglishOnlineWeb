import React, { useCallback, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppInputWithLabel } from "components/common";
import { LabelWithIcon, SuccessModal, UpdateQuestion } from "components";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TestingActions from "redux/testing.redux";
import { TestingService } from "services";
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

  const testingsRedux = useSelector(
    ({ testingRedux }) => testingRedux.testings,
    shallowEqual
  );

  const onUpdate = () => {
    const currentTesting = testingsRedux.find(({ _id }) => _id === data._id);
    TestingService.updateTesting(currentTesting)
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
    const newTestings = testingsRedux.map((item) => {
      if (item._id === data._id) {
        return { ...item, ...newData };
      }
      return item;
    });
    dispatch(TestingActions.updateTesting(newTestings));
  };

  const onChangeQuestion = (newData, id) => {
    const newTestings = testingsRedux.map((item) => {
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
    dispatch(TestingActions.updateTesting(newTestings));
  };

  const onCloseSuccessModal = () => {
    setIsSuccess(false);
    dispatch(TestingActions.getTestingList());
  };

  const onAddQuestion = () => {
    const newTestings = testingsRedux.map((item) => {
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
    dispatch(TestingActions.updateTesting(newTestings));
  };

  const onRemoveQuestion = (id) => {
    const newTestings = testingsRedux.map((item) => {
      if (item._id === data._id) {
        const newQuestion = item?.question.filter(({ _id }) => _id !== id);
        return {
          ...item,
          question: newQuestion,
        };
      }
      return item;
    });
    dispatch(TestingActions.updateTesting(newTestings));
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
              dispatch(TestingActions.getTestingList());
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
