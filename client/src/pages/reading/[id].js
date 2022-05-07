import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import {
  AppQuestion,
  CancelButton,
  ReadingContainer,
  ResultModal,
} from "components";
import { ApiConstant, PathConstant } from "const";
import { useRouter } from "next/router";
import { ReadingService } from "services";
import { READING_ROOT } from "const/path.const";

const ReadingDetail = () => {
  const { t: getLabel } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  const [choose, setChoose] = useState([]);
  const [isFinnish, setIsFinnish] = useState(false);
  const [correctTotal, setCorrectTotal] = useState(0);

  const onBack = () => {};

  const onComplete = () => {
    const answersFinal = data?.question?.map(({ answers, _id }) => {
      const answersCorrect = answers?.find(({ isTrue }) => isTrue === true);
      if (answersCorrect) return { id: _id, correct: answersCorrect?.content };
    });
    const checkChoose = choose?.map(({ id, value }) => {
      const currentAnswer = answersFinal?.find((item) => item?.id === id);
      return { id: id, value: value, status: currentAnswer?.correct === value };
    });
    setChoose(checkChoose);
    setIsFinnish(true);
  };

  const onSelect = (questionId, value) => {
    const isSelected = choose.find(({ id }) => id === questionId);
    if (isSelected && isSelected?.value !== value) {
      const newData = choose.map((item) => {
        if (item?.id === questionId) {
          return { ...item, value: value };
        }
        return item;
      });
      setChoose(newData);
    } else {
      setChoose([...choose, { id: questionId, value: value }]);
    }
  };

  useEffect(() => {
    if (id) {
      try {
        ReadingService.getReadingDetail(id).then((res) => {
          if (res.status === ApiConstant.STT_OK) {
            setData(res.data[0]);
          }
        });
      } catch (error) {
        window.isDebug && console.log(error);
      }
    }
  }, [id]);

  useEffect(() => {
    if (isFinnish) {
      const result = choose?.filter(({ status }) => status === true);
      setCorrectTotal(result?.length);
    }
  }, [choose, isFinnish]);

  return (
    <HomeLayout>
      <Stack
        my={8.75}
        alignItems="center"
        justifyContent="center"
        position="relative"
        spacing={3}
      >
        <AppTypography variant="subtitle1" mt={3}>
          {getLabel("TXT_READING_QUESTION_TITLE")}
        </AppTypography>
        <ReadingContainer>{data?.content}</ReadingContainer>
        {data?.question?.map((item, index) => (
          <AppQuestion
            data={item}
            key={index}
            onChange={onSelect}
            numberQuestion={index + 1}
          />
        ))}
        <Stack direction="row" alignItems="center" spacing={2}>
          <CancelButton href={PathConstant.READING_ROOT} />
          <AppButton
            disabled={choose.length !== data?.question?.length}
            onClick={onComplete}
            sx={{ width: 132 }}
          >
            {getLabel("TXT_COMPLETE")}
          </AppButton>
        </Stack>
      </Stack>
      <ResultModal
        open={isFinnish}
        onClose={() => {
          setIsFinnish(false);
          router.push(READING_ROOT);
        }}
        total={choose?.length}
        correctTotal={correctTotal}
      />
    </HomeLayout>
  );
};

ReadingDetail.propTypes = {};

export default memo(ReadingDetail);
