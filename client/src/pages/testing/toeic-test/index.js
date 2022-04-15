import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppTypography, CommonTabs, CommonTitlePage } from "components/common";
import { PathConstant } from "const";

const ToeicTest = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack height={700} mt={8.75} alignItems="center">
        <CommonTitlePage>{getLabel("TXT_MOCK_TOEIC_TEST")}</CommonTitlePage>
        <CommonTabs tabs={getToeicTestTabs(getLabel)} />
      </Stack>
    </HomeLayout>
  );
};

ToeicTest.propTypes = {};

export default memo(ToeicTest);

export const getToeicTestTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.TOEIC_TEST_ROOT,
  },
  {
    label: getLabel("TXT_FINISHED"),
    path: PathConstant.MY_TOEIC,
  },
];
