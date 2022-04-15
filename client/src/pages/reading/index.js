import React, { memo } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import {
  AppCard,
  AppTypography,
  CommonTabs,
  CommonTitlePage,
} from "components/common";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";

const Reading = () => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack height={700} mt={8.75} alignItems="center">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_READING")}</CommonTitlePage>
        <CommonTabs tabs={getReadingTabs(getLabel)} />
        <AppCard />
      </Stack>
    </HomeLayout>
  );
};

Reading.propTypes = {};

export default memo(Reading);

export const getReadingTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.READING_ROOT,
  },
  {
    label: getLabel("TXT_LEARNED"),
    path: PathConstant.MY_READING,
  },
];
