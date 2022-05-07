import React, { memo, useState } from "react";
import { Avatar, Box, IconButton, Stack, TextField } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { makeStyles } from "@mui/styles";
import MainLayout from "layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorModal, SuccessModal } from "components";
import { HomeService } from "services";
import md5 from "md5";
import { useRouter } from "next/router";

const SignUp = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const router = useRouter();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSignUp = () => {
    if (!username || !password || !confirmPassword || !email) {
      setIsError(true);
      setMessage("Vui lòng điền đầy đủ thông tin!");
    } else if (username.length < 6) {
      setIsError(true);
      setMessage(
        "Tên đăng nhập phải dài ít nhất 6 ký tự. Vui lòng kiểm tra lại!"
      );
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setIsError(true);
      setMessage("Địa chỉ email chưa đúng định dạng. Vui lòng kiểm tra lại!");
    } else if (password !== confirmPassword || password.length < 8) {
      setIsError(true);
      setMessage(
        "Mật khẩu chưa hợp lệ! Mật khẩu phải có ít nhất 8 ký tự. Vui lòng kiểm tra lại."
      );
    } else {
      HomeService.signUp({ username, password: md5(password), email })
        .then((res) => {
          setIsSuccess(true);
        })
        .catch((error) => {
          window.isDebug && console.log(error);
        });
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.input}
          />
          <TextField
            placeholder={getLabel("P_EMAIL")}
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
          />
          <TextField
            placeholder={getLabel("P_PASSWORD")}
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.input}
          />
          <TextField
            placeholder={getLabel("P_CONFIRM_PASSWORD")}
            type="password"
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={classes.input}
          />
          <AppButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.btn}
            onClick={onSignUp}
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
      <ErrorModal
        open={isError}
        onClose={() => setIsError(false)}
        message={message}
      />
      <SuccessModal
        open={isSuccess}
        title={"Thành công!"}
        description={"Bạn đã tạo tài khoản thành công!"}
        onClose={() => {
          setIsSuccess(true);
          router.push(PathConstant.SIGN_IN);
        }}
      />
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
    marginTop: 12,
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
