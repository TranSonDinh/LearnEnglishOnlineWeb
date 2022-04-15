import React, { memo } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { getReadingTabs } from ".";

const MyReading = () => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack height={700} mt={8.75} alignItems="center">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_READING")}</CommonTitlePage>
        <CommonTabs tabs={getReadingTabs(getLabel)} />
      </Stack>
    </HomeLayout>
  );
};

MyReading.propTypes = {};

export default memo(MyReading);
