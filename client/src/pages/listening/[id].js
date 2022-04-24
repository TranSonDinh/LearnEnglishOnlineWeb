import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import { AppQuestion, CancelButton } from "components";
import { AppButton, AppTypography } from "components/common";
import { PathConstant } from "const";

const ListeningDetail = () => {
  const { t: getLabel } = useTranslation();

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
          {getLabel("TXT_LISTENING_QUESTION_TITLE")}
        </AppTypography>
        <ReactAudioPlayer src="my_audio_file.ogg" controls />
        {MOCK_DATA.map((item) => (
          <AppQuestion data={item} />
        ))}
        <Stack direction="row" alignItems="center" spacing={2}>
          <CancelButton href={PathConstant.LISTENING_ROOT} />
          <AppButton onClick={onComplete} sx={{ width: 132 }}>
            {getLabel("TXT_COMPLETE")}
          </AppButton>
        </Stack>
      </Stack>
    </HomeLayout>
  );
};

ListeningDetail.propTypes = {};

export default memo(ListeningDetail);

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
