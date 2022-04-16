import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";

const TestTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        label: getLabel("TXT_MOCK_TOEIC_TEST"),
      }}
      href={PathConstant.TOEIC_TEST_ROOT}
      {...props}
    />
  );
};

export default memo(TestTab);

TestTab.propTypes = {};
