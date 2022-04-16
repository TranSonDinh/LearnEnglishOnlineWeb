import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";

const ReadingTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        label: getLabel("TXT_PRACTICE_READING"),
      }}
      href={PathConstant.READING_ROOT}
      {...props}
    />
  );
};

export default memo(ReadingTab);

ReadingTab.propTypes = {};
