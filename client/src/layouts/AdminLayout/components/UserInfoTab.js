import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const UserInfoTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <SupervisorAccountIcon />,
        label: getLabel("TXT_ADMIN_USERS"),
      }}
      href={PathConstant.ADMIN_USES_ROOT}
      {...props}
    />
  );
};

export default memo(UserInfoTab);

UserInfoTab.propTypes = {};
