import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { ImageConstant } from "const";
import { AppTypography } from "./common";
import { useTranslation } from "react-i18next";
import { NS_HOME } from "const/lang.const";

const WhyChooseBlock = () => {
  const { t: getLabel } = useTranslation(NS_HOME);

  return (
    <Stack sx={{ height: 700, width: 520, p: 5, m: "0 auto" }}>
      <Box
        component="img"
        sx={{ width: 245, height: 161, m: "0 auto", mb: 6 }}
        src={ImageConstant.LapTopFeature}
      />
      <AppTypography variant="h3" mb={3}>
        {getLabel("TXT_WHY_LEARN_ON_WEB")}
      </AppTypography>
      <ItemLayout />
    </Stack>
  );
};

const ItemLayout = () => {
  return (
    <Stack>
      {/* <IconComponent></IconComponent> */}
      <Stack>
        <AppTypography variant="overline" fontWeight={700} mb={1.25}>
          Title
        </AppTypography>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          Description
        </AppTypography>
      </Stack>
    </Stack>
  );
};

ItemLayout.displayName = "ItemLayout";

export default memo(WhyChooseBlock);
