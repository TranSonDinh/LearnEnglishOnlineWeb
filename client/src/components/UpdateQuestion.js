import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  AppButton,
  AppInputWithLabel,
  AppSelect,
  AppTypography,
} from "./common";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { getQuestion } from "utils";

const UpdateQuestion = ({
  questionNumber,
  data,
  onChangeQuestion,
  onRemoveQuestion,
}) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const { answers } = data;

  const options = getQuestion(answers);

  const [trueAnswer, setTrueAnswer] = useState(options[0]?.value);

  useEffect(() => {
    answers.forEach(({ isTrue, content }, index) => {
      if (index === trueAnswer && !content) {
        setTrueAnswer();
      } else if (isTrue) {
        setTrueAnswer(index);
      }
    });
  }, [answers]);

  return (
    <Box sx={{ border: "2px double #1caff6", my: 2, p: 1, borderRadius: 2 }}>
      <AppInputWithLabel
        label={`${getLabel("TXT_QUESTION")} ${questionNumber || ""}`}
        labelProps={{ className: classes.label }}
        inputProps={{
          value: data.title,
          placeholder: getLabel("P_QUESTION"),
          onChange: (e) =>
            onChangeQuestion({ title: e.target.value }, data?._id),
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
            value: answers[0]?.content,
            placeholder: getLabel("P_A"),
            onChange: (e) => {
              const newAnswers = data?.answers?.map((item, index) => {
                if (index === 0) {
                  return { ...item, content: e.target.value };
                }
                return item;
              });
              onChangeQuestion(
                {
                  answers: newAnswers,
                },
                data?._id
              );
            },
          }}
        />
        <AppInputWithLabel
          label={getLabel("TXT_B")}
          inputProps={{
            value: answers[1]?.content,
            placeholder: getLabel("P_B"),
            onChange: (e) => {
              const newAnswers = data?.answers?.map((item, index) => {
                if (index === 1) {
                  return { ...item, content: e.target.value };
                }
                return item;
              });
              onChangeQuestion(
                {
                  answers: newAnswers,
                },
                data?._id
              );
            },
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
            value: answers[2]?.content,
            placeholder: getLabel("P_C"),
            onChange: (e) => {
              const newAnswers = data?.answers?.map((item, index) => {
                if (index === 2) {
                  return { ...item, content: e.target.value };
                }
                return item;
              });
              onChangeQuestion(
                {
                  answers: newAnswers,
                },
                data?._id
              );
            },
          }}
          label={getLabel("TXT_C")}
        />
        <AppInputWithLabel
          label={getLabel("TXT_D")}
          inputProps={{
            value: answers[3]?.content,
            placeholder: getLabel("P_D"),
            onChange: (e) => {
              const newAnswers = data?.answers?.map((item, index) => {
                if (index === 3) {
                  return { ...item, content: e.target.value };
                }
                return item;
              });
              onChangeQuestion(
                {
                  answers: newAnswers,
                },
                data?._id
              );
            },
          }}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        mt={2}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AppTypography variant="subtitle2">
            {getLabel("TXT_TRUE_ANSWER")}
          </AppTypography>
          <AppSelect
            options={options}
            value={trueAnswer}
            onChange={(e) => {
              const newAnswers = answers.map((item, index) => {
                return { ...item, isTrue: index === e.target.value };
              });

              onChangeQuestion(
                {
                  answers: newAnswers,
                },
                data?._id
              );
            }}
          />
        </Stack>
        <AppButton
          onClick={() => onRemoveQuestion(data?._id)}
          classes={{ contained: classes.containedBtn }}
        >
          Xoá câu hỏi
        </AppButton>
      </Stack>
    </Box>
  );
};

UpdateQuestion.propTypes = {
  answers: PropTypes.array,
  data: PropTypes.object,
  onChangeQuestion: PropTypes.func.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
};

UpdateQuestion.defaultProps = {
  answers: [],
  data: [],
};

export default UpdateQuestion;

const useStyles = makeStyles((theme) => ({
  label: {
    minWidth: 70,
  },
  containedBtn: {
    fontSize: 12,
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
