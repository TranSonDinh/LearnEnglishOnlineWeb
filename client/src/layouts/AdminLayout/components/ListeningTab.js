import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { AppTypography, CommonHeaderTab } from "components/common";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const ListeningTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <HeadsetMicIcon />,
        label: getLabel("TXT_ADMIN_LISTENING"),
      }}
      href={PathConstant.ADMIN_LISTENING_ROOT}
      {...props}
    />
  );
};

export default memo(ListeningTab);

ListeningTab.propTypes = {};
