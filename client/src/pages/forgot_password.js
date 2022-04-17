import React, { memo } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import MainLayout from "layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import CloseIcon from "@mui/icons-material/Close";

const SignIn = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <MainLayout>
      <Box position="relative" width="100%" height="100%">
        <Stack
          justifyContent="center"
          alignItems="center"
          className={classes.container}
        >
          <AppTypography variant="h3" m={2}>
            {getLabel("TXT_FORGOT_PASSWORD")}
          </AppTypography>
          <AppTypography
            variant="subtitle2"
            fontWeight={400}
            align="center"
            mb={1}
            color="#3c3c3c"
          >
            {getLabel("MSG_FORGOT_PASSWORD")}
          </AppTypography>
          <TextField
            placeholder={getLabel("P_EMAIL")}
            fullWidth
            required
            className={classes.input}
          />
          <AppButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.btn}
          >
            {getLabel("TXT_SEND")}
          </AppButton>
        </Stack>
        <AppButton
          classes={{ root: classes.btnRedirect }}
          href={PathConstant.SIGN_IN}
        >
          {getLabel("TXT_SIGN_IN")}
        </AppButton>
        <IconButton className={classes.iconClose} href={PathConstant.SIGN_IN}>
          <CloseIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </MainLayout>
  );
};

export default memo(SignIn);

const useStyles = makeStyles((theme) => ({
  container: {
    width: 375,
    height: "100%",
    margin: "0 auto",
  },
  input: {
    background: "#f7f7f7",
    marginTop: 8,
    borderRadius: 16,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #e5e5e5",
        borderRadius: 16,
      },
      "&:hover fieldset": {
        border: "2px solid #c2bebe",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #c2bebe",
      },
    },
  },
  btn: {
    height: 50,
    marginTop: 16,
  },
  checkbox: {
    alignSelf: "self-start",
    margin: "8px 0",
  },
  btnRedirect: {
    position: "absolute",
    right: 24,
    top: 24,
  },
  forgotPassword: {
    fontWeight: 700,
    color: "#afafaf",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: 15,
    "&:hover": {
      background: "transparent",
      fontWeight: 700,
      color: "#777",
    },
  },
  iconClose: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#777",
  },
}));
