import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const VocabularyTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <AccountTreeIcon />,
        label: getLabel("TXT_ADMIN_VOCABULARY"),
      }}
      href={PathConstant.ADMIN_VOCABULARY_ROOT}
      {...props}
    />
  );
};

export default memo(VocabularyTab);

VocabularyTab.propTypes = {};
