import React from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppButton, AppTypography } from "components/common";
import MainLayout from "layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import { PathConstant } from "const";

const SignIn = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return (
    <MainLayout>
      <Stack
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Avatar sx={{ backgroundColor: "error.main", width: 50, height: 50 }} />
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
        />
        <AppButton
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          className={classes.btn}
          href={PathConstant.ADMIN_ROOT}
        >
          {getLabel("TXT_SIGN_IN")}
        </AppButton>
      </Stack>
    </MainLayout>
  );
};

SignIn.propTypes = {};

export default SignIn;

const useStyles = makeStyles((theme) => ({
  container: {
    width: 400,
    height: 500,
    margin: "0 auto",
    background: theme.palette.grey[100],
    padding: theme.spacing(3, 4),
    borderRadius: theme.spacing(3),
    marginTop: theme.spacing(17),
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
    marginTop: theme.spacing(3),
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
