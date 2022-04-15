import React, { memo } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";

const Listening = () => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack height={700} mt={8.75} alignItems="center">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_LISTENING")}</CommonTitlePage>
        <CommonTabs tabs={getListeningTabs(getLabel)} />
      </Stack>
    </HomeLayout>
  );
};

Listening.propTypes = {};

export default memo(Listening);

export const getListeningTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.LISTENING_ROOT,
  },
  {
    label: getLabel("TXT_LEARNED"),
    path: PathConstant.MY_LISTENING,
  },
];
