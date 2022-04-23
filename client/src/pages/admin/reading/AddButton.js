import React, { memo, useEffect, useMemo, useReducer, useState } from "react";
import PropTypes from "prop-types";
import {
  AppButton,
  AppDialog,
  AppInputWithLabel,
  AppSelect,
  AppTypography,
} from "components/common";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { ApiConstant, AppConstant } from "const";
import { ReadingService } from "services";

const AddButton = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");

  const options = useMemo(() => {
    let arr = AppConstant.DEFAULT_ANSWER;
    arr[0].value = Boolean(answerA) ? 0 : "";
    arr[1].value = Boolean(answerB) ? 1 : "";
    arr[2].value = Boolean(answerC) ? 2 : "";
    arr[3].value = Boolean(answerD) ? 3 : "";
    arr = arr.filter((item) => item.value !== "");
    return arr.length > 0
      ? arr
      : [{ label: "Vui lòng điền đáp án bên trên", value: "" }];
  }, [answerA, answerB, answerC, answerD]);

  const [trueAnswer, setTrueAnswer] = useState(options[0]?.value);

  const [open, toggleOpen] = useReducer(
    (currentStatus, nextStatus) => nextStatus ?? !currentStatus,
    false
  );

  const onCreate = () => {
    try {
      const newArr = [answerA, answerB, answerC, answerD];
      const newAnswers = options.map(({ value }) => ({
        content: newArr[value],
        isTrue: value === trueAnswer,
      }));

      ReadingService.createReading({
        title: title,
        content: content,
        question: question,
        answers: newAnswers,
      }).then((res) => {
        if (res.status === ApiConstant.STT_OK) {
          toggleOpen(false);
          reset();
        }
      });
    } catch (error) {
      window.isDebug && console.log(error);
    }
  };

  const reset = () => {
    setTitle("");
    setContent("");
    setQuestion("");
    setAnswerA("");
    setAnswerB("");
    setAnswerC("");
    setAnswerD("");
  };

  useEffect(() => {
    setTrueAnswer(options[0]?.value);
  }, [options]);

  return (
    <>
      <AppButton
        classes={{ contained: classes.contained }}
        onClick={() => toggleOpen(true)}
      >
        {getLabel("TXT_ADD")}
      </AppButton>
      <AppDialog
        open={open}
        title={getLabel("TXT_ADD")}
        onClose={() => toggleOpen(false)}
        closeIcon
        classes={{ paper: classes.paper }}
      >
        <AppInputWithLabel
          label={getLabel("TXT_TITLE")}
          inputProps={{
            className: classes.input,
            placeholder: getLabel("P_TITLE"),
            onChange: (e) => setTitle(e.target.value),
          }}
          labelProps={{ className: classes.label }}
        />
        <AppInputWithLabel
          label={getLabel("TXT_CONTENT")}
          labelProps={{ className: classes.label }}
          inputProps={{
            multiline: true,
            rows: 4,
            placeholder: getLabel("P_CONTENT"),
            onChange: (e) => setContent(e.target.value),
          }}
          sx={{ mt: 2 }}
        />
        <AppInputWithLabel
          label={getLabel("TXT_QUESTION")}
          labelProps={{ className: classes.label }}
          inputProps={{
            placeholder: getLabel("P_QUESTION"),
            onChange: (e) => setQuestion(e.target.value),
          }}
          sx={{ mt: 2 }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <AppInputWithLabel
            label={getLabel("TXT_A")}
            inputProps={{
              placeholder: getLabel("P_A"),
              onChange: (e) => setAnswerA(e.target.value),
            }}
          />
          <AppInputWithLabel
            label={getLabel("TXT_B")}
            inputProps={{
              placeholder: getLabel("P_B"),
              onChange: (e) => setAnswerB(e.target.value),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 2 }}
        >
          <AppInputWithLabel
            inputProps={{
              placeholder: getLabel("P_C"),
              onChange: (e) => setAnswerC(e.target.value),
            }}
            label={getLabel("TXT_C")}
          />
          <AppInputWithLabel
            label={getLabel("TXT_D")}
            inputProps={{
              placeholder: getLabel("P_D"),
              onChange: (e) => setAnswerD(e.target.value),
            }}
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} mt={2}>
          <AppTypography variant="subtitle2">
            {getLabel("TXT_TRUE_ANSWER")}
          </AppTypography>
          <AppSelect
            options={options}
            value={trueAnswer}
            onChange={(e) => setTrueAnswer(e.target.value)}
          />
        </Stack>
        <AppButton classes={{ root: classes.btn }} onClick={onCreate}>
          {getLabel("TXT_CREATE")}
        </AppButton>
      </AppDialog>
    </>
  );
};

AddButton.propTypes = {};

export default memo(AddButton);

const useStyles = makeStyles((theme) => ({
  contained: {
    width: 200,
    background: theme.palette.success.main,
    borderRadius: 5,
    boxShadow: "unset",
    "&:hover": {
      background: theme.palette.success.main,
      boxShadow: "unset",
    },
  },
  paper: {
    width: 600,
    borderRadius: theme.spacing(2),
  },
  label: {
    minWidth: 70,
  },
  btn: {
    marginTop: theme.spacing(3),
  },
}));
