import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { AppTypography } from "./common";
import { useTranslation } from "react-i18next";
import { NS_HOME } from "const/lang.const";
import { makeStyles } from "@mui/styles";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Skill = () => {
  const { t: getLabel } = useTranslation(NS_HOME);
  const classes = useStyles();

  return (
    <Stack alignItems="center" sx={{ my: 8 }} spacing={8}>
      <AppTypography variant="h1" fontWeight={700}>
        {getLabel("TXT_SKILL_TITLE")}
      </AppTypography>
      <Stack direction="row" spacing={4}>
        <Box className={classes.item} sx={{ color: "#00a4ff" }}>
          <HeadphonesIcon fontSize="large" sx={{ color: "#00a4ff" }} />
          Nghe
        </Box>
        <Box className={classes.item} sx={{ color: "#ffe300" }}>
          <ReceiptLongIcon fontSize="large" sx={{ color: "#ffe300" }} />
          Đọc
        </Box>
        <Box className={classes.item} sx={{ color: "#ff0071" }}>
          <GTranslateIcon fontSize="large" sx={{ color: "#ff0071" }} />
          Từ vựng
        </Box>
      </Stack>
    </Stack>
  );
};

export default memo(Skill);

const useStyles = makeStyles((theme) => ({
  item: {
    border: `3px solid ${theme.palette.attention.main}`,
    width: 380,
    height: 175,
    borderRadius: "50px 0 50px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: 32,
    fontWeight: "bold",
  },
}));
