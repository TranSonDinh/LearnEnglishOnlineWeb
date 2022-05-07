import React, { memo, useEffect, useState } from "react";
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
import { ErrorModal } from "components";
import { useDispatch, useSelector } from "react-redux";
import HomeActions from "redux/home.redux";
import md5 from "md5";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

const SignIn = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isClickSign, setIsClickSign] = useState(false);

  const accountRedux = useSelector(({ homeRedux }) => homeRedux.account);
  const isFetching = useSelector(({ homeRedux }) => homeRedux.isFetching);

  const onSignIn = () => {
    if (!username || !password) {
      setIsError(true);
      setMessage("Vui lòng điền đầy đủ thông tin!");
    } else {
      setIsClickSign(true);
      dispatch(HomeActions.login({ username, password: md5(password) }));
    }
  };

  useEffect(() => {
    if (isClickSign && !isFetching) {
      if (accountRedux) {
        router.push(PathConstant.ROOT);
        Cookie.set("account", `${username} ${md5(password)}`, {
          expires: 1,
        });
      } else {
        setIsError(true);
        setMessage(
          "Tên đăng nhập hoặc mật khẩu chưa chính xác. Vui lòng kiểm tra lại!"
        );
      }
    }
  }, [accountRedux, isClickSign, isFetching]);

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            placeholder={getLabel("P_PASSWORD")}
            type="password"
            fullWidth
            required
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={onSignIn}
          >
            {getLabel("TXT_SIGN_IN")}
          </AppButton>
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
      <ErrorModal
        open={isError}
        onClose={() => {
          setIsClickSign(false);
          setIsError(false);
        }}
        message={message}
      />
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
