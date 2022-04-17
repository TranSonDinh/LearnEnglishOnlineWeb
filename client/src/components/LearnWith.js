import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Trans } from "components";
import { ImageConstant, PathConstant } from "const";
import { NS_HOME } from "const/lang.const";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppTypography } from "./common";

const LearnWith = () => {
  const { t: getLabel } = useTranslation(NS_HOME);
  const classes = useStyles();

  return (
    <Stack
      direction="row"
      sx={{ width: "100%", justifyContent: "space-between", px: 10, py: 8 }}
      spacing={5}
    >
      <Stack spacing={3}>
        <AppTypography variant="h3">
          {getLabel("TXT_PRACTICE_IELTS")}
        </AppTypography>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          {getLabel("TXT_IELTS_DESCRIPTION")}
        </AppTypography>
        <AppButton classes={{ root: classes.button }} disabled>
          {getLabel("TXT_LEARN_NOW")}
          <Box
            component="img"
            src={ImageConstant.ComingSoon}
            sx={{ width: 70, right: -15, top: -25, position: "absolute" }}
          />
        </AppButton>
      </Stack>
      <Stack spacing={3}>
        <AppTypography variant="h3">
          {getLabel("TXT_PRACTICE_TOEIC")}
        </AppTypography>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          {getLabel("TXT_TOEIC_DESCRIPTION")}
        </AppTypography>
        <AppButton
          classes={{ root: classes.button }}
          href={PathConstant.TOEIC_TEST_ROOT}
        >
          {getLabel("TXT_LEARN_NOW")}
        </AppButton>
      </Stack>
    </Stack>
  );
};

export default memo(LearnWith);

const useStyles = makeStyles((theme) => ({
  button: {
    width: 140,
    fontWeight: 700,
    position: "relative",
  },
}));
