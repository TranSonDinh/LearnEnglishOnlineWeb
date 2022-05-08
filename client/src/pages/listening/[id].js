import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import {
  AppQuestion,
  CancelButton,
  LabelWithIcon,
  ResultModal,
} from "components";
import { AppButton, AppDialog, AppTypography } from "components/common";
import { ApiConstant, PathConstant } from "const";
import { HomeService, ListeningService } from "services";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import Cookie from "js-cookie";

const ListeningDetail = () => {
  const { t: getLabel } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [choose, setChoose] = useState([]);
  const [isFinnish, setIsFinnish] = useState(false);
  const [correctTotal, setCorrectTotal] = useState(0);
  const [error, setError] = useState(false);

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

  const onBack = () => {
    if (choose.length > 0) {
      setError(true);
    } else {
      router.push(PathConstant.LISTENING_ROOT);
    }
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
        ListeningService.getListeningDetail(id).then((res) => {
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
          {getLabel("TXT_LISTENING_QUESTION_TITLE")}
        </AppTypography>
        <audio src={`/assets/listening/${data?.listeningSrc}`} controls></audio>
        {data?.question?.map((item, index) => (
          <AppQuestion
            data={item}
            key={index}
            onChange={onSelect}
            numberQuestion={index + 1}
          />
        ))}
        <Stack direction="row" alignItems="center" spacing={2}>
          <CancelButton onClick={onBack} />
          <AppButton onClick={onComplete} sx={{ width: 132 }}>
            {getLabel("TXT_COMPLETE")}
          </AppButton>
        </Stack>
      </Stack>
      <ResultModal
        open={isFinnish}
        onClose={() => {
          setIsFinnish(false);
          router.push(PathConstant.LISTENING_ROOT);
          const hasAccount = Cookie.get("account");
          if (hasAccount) {
            const arr = hasAccount.split(" ");
            HomeService.updateListening({
              id: id,
              percent: (100 * correctTotal) / choose?.length,
              account: arr[0],
            });
          }
        }}
        total={choose?.length}
        correctTotal={correctTotal}
      />
      <AppDialog open={error} classes={{ paper: classes.paper }}>
        <LabelWithIcon>Bạn chưa hoàn thành!</LabelWithIcon>
        <AppTypography sx={{ my: 3, textAlign: "center" }}>
          Bạn sẽ bị mất kết quả đã chọn nếu bạn không hoàn thành bài kiểm tra!
        </AppTypography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <CancelButton onClick={() => setError(false)} />
          <AppButton
            onClick={() => {
              router.push(PathConstant.LISTENING_ROOT);
              setError(false);
            }}
            classes={{ contained: classes.contained }}
          >
            Thoát
          </AppButton>
        </Stack>
      </AppDialog>
    </HomeLayout>
  );
};

ListeningDetail.propTypes = {};

export default memo(ListeningDetail);

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
  },
  contained: {
    width: 132,
  },
}));
