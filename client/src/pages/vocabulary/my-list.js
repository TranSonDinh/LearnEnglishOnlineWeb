import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { getVocabularyTabs } from ".";

const MyVocabulary = () => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack height={700} mt={8.75} alignItems="center">
        <CommonTitlePage>{getLabel("TXT_LEARNING_VOCABULARY")}</CommonTitlePage>
        <CommonTabs tabs={getVocabularyTabs(getLabel)} />
      </Stack>
    </HomeLayout>
  );
};

MyVocabulary.propTypes = {};

export default memo(MyVocabulary);
