import React, { memo } from "react";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import MainLayout from "layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { Trans } from "components";
import { PathConstant } from "const";

const SignIn = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <MainLayout>
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
}));
