import React, { memo } from "react";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { CommonHeaderTab } from "components/common";
import BallotIcon from "@mui/icons-material/Ballot";

const TestTab = (props) => {
  const { t: getLabel } = useTranslation();

  return (
    <CommonHeaderTab
      labelProps={{
        startIcon: <BallotIcon />,
        label: getLabel("TXT_ADMIN_TEST"),
      }}
      href={PathConstant.ADMIN_TEST_ROOT}
      {...props}
    />
  );
};

export default memo(TestTab);

TestTab.propTypes = {};
