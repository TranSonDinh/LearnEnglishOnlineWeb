import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const SettingAccountTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <ManageAccountsIcon />,
        label: getLabel("TXT_ADMIN_ACCOUNT"),
      }}
      href={PathConstant.ADMIN_ACCOUNT_ROOT}
      {...props}
    />
  );
};

export default memo(SettingAccountTab);

SettingAccountTab.propTypes = {};
