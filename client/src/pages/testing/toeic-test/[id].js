import React, { memo, useMemo, useState } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Box, Stack } from "@mui/material";
import { AppQuestion, CircleNumberList, CoolDownTimer } from "components";
import { AppButton } from "components/common";
import { makeStyles } from "@mui/styles";
import ReactAudioPlayer from "react-audio-player";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const TestingDetail = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [selectedListenList, setSelectedListenList] = useState([]);
  const [selectedReadList, setSelectedReadList] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState();
  const [currentType, setCurrentType] = useState(TEST_TYPE.listening);

  const [data, from, to] = useMemo(() => {
    const newData =
      currentType === TEST_TYPE.listening
        ? MOCK_LISTENING_DATA
        : MOCK_READING_DATA;
    const [from, to] = getRangeQuestionNumber(newData);
    return [newData, from, to];
  }, [currentType, getRangeQuestionNumber]);

  const onFinish = () => {};

  const onChangeAnswer = (number) => {
    let arr =
      currentType === TEST_TYPE.listening
        ? selectedListenList
        : selectedReadList;
    if (!arr.find((item) => item === number)) {
      arr = [...arr, number];
    }
    currentType === TEST_TYPE.listening
      ? setSelectedListenList(arr)
      : setSelectedReadList(arr);
  };

  return (
    <HomeLayout>
      <Stack
        my={8.75}
        alignItems="center"
        justifyContent="center"
        position="relative"
        spacing={5}
        direction="row"
        px={5}
      >
        <Stack minWidth={320} alignItems="center" alignSelf="flex-start">
          <CoolDownTimer timeRemaining={10} mt={3} mr={3} />
          <CircleNumberList
            from={from}
            to={to}
            onClick={setCurrentQuestionNumber}
            selectedList={
              currentType === TEST_TYPE.listening
                ? selectedListenList
                : selectedReadList
            }
          />
          {currentType === TEST_TYPE.listening ? (
            <AppButton
              classes={{ contained: classes.contained }}
              onClick={() => setCurrentType(TEST_TYPE.reading)}
            >
              {getLabel("TXT_TO_READ")}
            </AppButton>
          ) : (
            <Stack direction="row">
              <AppButton
                classes={{ contained: classes.contained }}
                onClick={() => setCurrentType(TEST_TYPE.listening)}
              >
                {getLabel("TXT_TO_LISTEN")}
              </AppButton>
              <AppButton
                classes={{
                  contained: clsx(classes.contained, classes.finishButton),
                }}
                onClick={onFinish}
              >
                {getLabel("TXT_COMPLETE")}
              </AppButton>
            </Stack>
          )}
        </Stack>
        <Stack flexGrow={1}>
          {data?.map((item) => (
            <AppQuestion
              data={item}
              key={item?.id}
              onChange={onChangeAnswer}
              questionContent={
                <Box sx={{ mt: 2, mb: 1 }}>
                  {currentType === TEST_TYPE.listening ? (
                    <ReactAudioPlayer src={item?.source} controls />
                  ) : (
                    item?.source
                  )}
                </Box>
              }
            />
          ))}
        </Stack>
      </Stack>
    </HomeLayout>
  );
};

TestingDetail.propTypes = {};

export default memo(TestingDetail);

const TEST_TYPE = {
  listening: 1,
  reading: 2,
};

const useStyles = makeStyles((theme) => ({
  contained: {
    fontSize: 14,
    marginRight: theme.spacing(3),
    width: 135,
  },
  finishButton: {
    background: theme.palette.error.main,
    boxShadow: `0 5px 0 ${theme.palette.error.dark}`,
    "&:hover": {
      opacity: 0.8,
      background: theme.palette.error.main,
      boxShadow: `0 5px 0 ${theme.palette.error.dark}`,
    },
  },
}));

const getRangeQuestionNumber = (data) => {
  const numbers = data.map(({ numberQuestion }) => numberQuestion);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [min, max];
};

const MOCK_LISTENING_DATA = [
  {
    id: 1,
    numberQuestion: 1,
    message: "Chon di nao",
    source: "/sdf",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    id: 2,
    numberQuestion: 2,
    message: "Chon di thoi",
    source: "/sdf",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    id: 3,
    numberQuestion: 3,
    message: "Chon di roi",
    source: "/sdf",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
];

const MOCK_READING_DATA = [
  {
    id: 4,
    numberQuestion: 4,
    message: "Chon di nao",
    source:
      "Trong tiếng Anh, khi nói về nghĩa “điểm số”, chắc hẳn các bạn sẽ phân vân không biết đâu để phân biệt mark, score, grade, score. Chúng đều mang nghĩa “điểm”, tuy nhiên cách dùng và bản chất lại khá khác nhau.",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    id: 5,
    numberQuestion: 5,
    message: "Chon di thoi",
    source:
      "Trong tiếng Anh, khi nói về nghĩa “điểm số”, chắc hẳn các bạn sẽ phân vân không biết đâu để phân biệt mark, score, grade, score. Chúng đều mang nghĩa “điểm”, tuy nhiên cách dùng và bản chất lại khá khác nhau.",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    id: 6,
    numberQuestion: 6,
    message: "Chon di roi",
    source:
      "Trong tiếng Anh, khi nói về nghĩa “điểm số”, chắc hẳn các bạn sẽ phân vân không biết đâu để phân biệt mark, score, grade, score. Chúng đều mang nghĩa “điểm”, tuy nhiên cách dùng và bản chất lại khá khác nhau.",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
];
