import React, { memo } from "react";
import { Avatar, Box, IconButton, Stack, TextField } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import MainLayout from "layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = () => {
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
          <Avatar sx={{ backgroundColor: "#1bbd7e", width: 50, height: 50 }} />
          <AppTypography variant="h3" m={2}>
            {getLabel("TXT_SIGN_UP")}
          </AppTypography>
          <TextField
            placeholder={getLabel("P_USERNAME")}
            fullWidth
            required
            className={classes.input}
          />
          <TextField
            placeholder={getLabel("P_EMAIL")}
            fullWidth
            required
            className={classes.input}
          />
          <TextField
            placeholder={getLabel("P_PASSWORD")}
            type="password"
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
            {getLabel("TXT_SIGN_UP")}
          </AppButton>
          <AppTypography>
            {/* <Trans i18next={getLabel("MSG_TERM_SIGN_IN")} /> */}
          </AppTypography>
        </Stack>
        <AppButton
          href={PathConstant.SIGN_IN}
          classes={{ root: classes.btnRedirect }}
        >
          {getLabel("TXT_SIGN_IN")}
        </AppButton>
        <IconButton className={classes.iconClose} href={PathConstant.ROOT}>
          <CloseIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </MainLayout>
  );
};

export default memo(SignUp);

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
  btnRedirect: {
    position: "absolute",
    right: 24,
    top: 24,
  },
  iconClose: {
    position: "absolute",
    top: 20,
    left: 20,
    color: "#777",
  },
}));
