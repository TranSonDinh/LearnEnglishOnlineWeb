import React, { memo } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
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
          <Avatar sx={{ backgroundColor: "#1bbd7e", width: 50, height: 50 }} />
          <AppTypography variant="h3" m={2}>
            {getLabel("TXT_SIGN_IN")}
          </AppTypography>
          <TextField
            placeholder={getLabel("P_USERNAME_EMAIL")}
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
            InputProps={{
              endAdornment: (
                <AppButton
                  variant="text"
                  href={PathConstant.FORGOT_PASSWORD}
                  disableRipple
                  className={classes.forgotPassword}
                >
                  {getLabel("TXT_FORGET")}
                </AppButton>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label={getLabel("TXT_REMEMBER_ME")}
            className={classes.checkbox}
          />
          <AppButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.btn}
          >
            {getLabel("TXT_SIGN_IN")}
          </AppButton>
          <AppTypography>
            {/* <Trans i18next={getLabel("MSG_TERM_SIGN_IN")} /> */}
          </AppTypography>
        </Stack>
        <AppButton
          classes={{ root: classes.btnRedirect }}
          href={PathConstant.SIGN_UP}
        >
          {getLabel("TXT_SIGN_UP")}
        </AppButton>
        <IconButton className={classes.iconClose} href={PathConstant.ROOT}>
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
    background: theme.palette.grey.main,
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `2px solid ${theme.palette.grey[100]}`,
        borderRadius: theme.spacing(2),
      },
      "&:hover fieldset": {
        border: `2px solid ${theme.palette.grey[200]}`,
      },
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.grey[200]}`,
      },
    },
  },
  btn: {
    height: 50,
  },
  checkbox: {
    alignSelf: "self-start",
    margin: theme.spacing(1, 0),
  },
  btnRedirect: {
    position: "absolute",
    right: theme.spacing(3),
    top: theme.spacing(3),
  },
  forgotPassword: {
    fontWeight: 700,
    color: theme.palette.grey[300],
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
