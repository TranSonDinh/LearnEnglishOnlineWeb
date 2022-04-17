import React, { memo } from "react";
import PropTypes from "prop-types";
import AdminLayout from "layouts/AdminLayout";
import { Stack, TextField } from "@mui/material";
import { AppButton, AppTypography } from "components/common";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const account = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return (
    <AdminLayout>
      <Stack sx={{ px: 4, pt: 5, pb: 4 }}>
        <AppTypography variant="h3">Thông tin tài khoản</AppTypography>
        <Stack sx={{ mt: 4 }} spacing={2.5}>
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
          <Stack direction="row" alignItems="center" spacing={2}>
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
              {getLabel("TXT_CHANGE_PASSWORD")}
            </AppButton>
          </Stack>
        </Stack>
      </Stack>
    </AdminLayout>
  );
};

account.propTypes = {};

export default memo(account);

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
    borderRadius: theme.spacing(2),
    width: 400,
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
    width: 150,
    fontSize: 16,
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
