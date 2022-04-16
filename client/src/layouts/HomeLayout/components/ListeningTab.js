import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";

const ListeningTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        label: getLabel("TXT_PRACTICE_LISTENING"),
      }}
      href={PathConstant.LISTENING_ROOT}
      {...props}
    />
  );
};

export default memo(ListeningTab);

ListeningTab.propTypes = {};
