import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { AppQuestion, CancelButton, ReadingContainer } from "components";
import { ApiConstant, PathConstant } from "const";
import { useRouter } from "next/router";
import { ReadingService } from "services";

const ReadingDetail = () => {
  const { t: getLabel } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();

  const onBack = () => {};
  const onComplete = () => {};

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
            onChange={() => {}}
            numberQuestion={index + 1}
          />
        ))}
        <Stack direction="row" alignItems="center" spacing={2}>
          <CancelButton href={PathConstant.READING_ROOT} />
          <AppButton onClick={onComplete} sx={{ width: 132 }}>
            {getLabel("TXT_COMPLETE")}
          </AppButton>
        </Stack>
      </Stack>
    </HomeLayout>
  );
};

ReadingDetail.propTypes = {};

export default memo(ReadingDetail);
