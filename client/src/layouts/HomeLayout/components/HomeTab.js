import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";

const HomeTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        label: getLabel("TXT_HOME"),
      }}
      href={PathConstant.ROOT}
      {...props}
    />
  );
};

export default memo(HomeTab);

HomeTab.propTypes = {};
