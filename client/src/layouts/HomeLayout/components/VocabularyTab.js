import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";

const VocabularyTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        label: getLabel("TXT_LEARNING_VOCABULARY"),
      }}
      href={PathConstant.VOCABULARY_ROOT}
      {...props}
    />
  );
};

export default memo(VocabularyTab);

VocabularyTab.propTypes = {};
