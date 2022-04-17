import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { ImageConstant } from "const";
import { AppTypography } from "./common";
import { useTranslation } from "react-i18next";
import { NS_HOME } from "const/lang.const";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PropTypes from "prop-types";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

const WhyChooseBlock = () => {
  const { t: getLabel } = useTranslation(NS_HOME);

  return (
    <Stack sx={{ width: 520, p: 10, m: "0 auto" }} spacing={2.5}>
      <Box
        component="img"
        sx={{ width: 245, height: 161, m: "0 auto", mb: 6 }}
        src={ImageConstant.LapTopFeature}
      />
      <AppTypography variant="h3" mb={3}>
        {getLabel("TXT_WHY_LEARN_ON_WEB")}
      </AppTypography>
      <ItemLayout
        title={getLabel("TXT_EFFECTIVE")}
        description={getLabel("TXT_EFFECTIVE_DESCRIPTION")}
      />
      <ItemLayout
        title={getLabel("TXT_EFFECTIVE")}
        description={getLabel("TXT_EFFECTIVE_DESCRIPTION")}
        icon={
          <LocalFireDepartmentIcon sx={{ color: "error.main", fontSize: 28 }} />
        }
      />
      <ItemLayout
        title={getLabel("TXT_EFFECTIVE")}
        description={getLabel("TXT_EFFECTIVE_DESCRIPTION")}
        icon={
          <StarPurple500Icon sx={{ color: "warning.main", fontSize: 32 }} />
        }
      />
    </Stack>
  );
};

const ItemLayout = ({ title, description, icon, ...otherProps }) => {
  return (
    <Stack direction="row" spacing={2} {...otherProps}>
      {icon || <CheckCircleIcon sx={{ color: "success.main", fontSize: 28 }} />}
      <Stack>
        <AppTypography variant="overline" fontWeight={700} mb={1.25}>
          {title}
        </AppTypography>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          {description}
        </AppTypography>
      </Stack>
    </Stack>
  );
};

ItemLayout.displayName = "ItemLayout";

export default memo(WhyChooseBlock);

ItemLayout.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  icon: PropTypes.node,
};
