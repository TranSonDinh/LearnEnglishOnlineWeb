import React, { memo } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";

const Vocabulary = () => {
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

Vocabulary.propTypes = {};

export default memo(Vocabulary);

export const getVocabularyTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.VOCABULARY_ROOT,
  },
  {
    label: getLabel("TXT_SAVED"),
    path: PathConstant.MY_VOCABULARY,
  },
];
