import React, { memo } from "react";
import PropTypes from "prop-types";
import { getListeningTabs } from ".";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import HomeLayout from "layouts/HomeLayout";

const MyListening = () => {
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

MyListening.propTypes = {};

export default memo(MyListening);
