import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { AppQuestion, CancelButton, ReadingContainer } from "components";

const ReadingDetail = () => {
  const { t: getLabel } = useTranslation();

  const onBack = () => {};
  const onComplete = () => {};

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
        <ReadingContainer>
          Hai bác sĩ khám sàng lọc cho từng học sinh. Họ đo thân nhiệt, nhịp
          tim, hỏi han cặn kẽ các em lẫn phụ huynh về các dị ứng, bệnh nền để
          tầm soát. Sau khi tiêm, học sinh ngồi lại chờ theo dõi trong 30 phút
          và khám một lần nữa trước khi ra về.
        </ReadingContainer>
        {MOCK_DATA.map((item) => (
          <AppQuestion data={item} />
        ))}
        <Stack direction="row" alignItem="center" spacing={2}>
          <CancelButton onClick={onBack} />
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

const MOCK_DATA = [
  {
    numberQuestion: 1,
    message: "Chon di nao",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    numberQuestion: 2,
    message: "Chon di thoi",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
  {
    numberQuestion: 3,
    message: "Chon di roi",
    choose: [
      { value: "1", label: "Friday" },
      { value: "2", label: "Monday" },
      { value: "3", label: "Saturday" },
      { value: "4", label: "Wednesday" },
    ],
  },
];
