import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const ReadingTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <AutoStoriesIcon />,
        label: getLabel("TXT_ADMIN_READING"),
      }}
      href={PathConstant.ADMIN_READING_ROOT}
      {...props}
    />
  );
};

export default memo(ReadingTab);

ReadingTab.propTypes = {};
