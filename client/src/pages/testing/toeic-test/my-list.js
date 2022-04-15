import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppTypography, CommonTabs, CommonTitlePage } from "components/common";
import { getToeicTestTabs } from ".";

const MyToeic = () => {
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

MyToeic.propTypes = {};

export default memo(MyToeic);
