import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppBar, Stack } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import { AppButton, AppTypography } from "components/common";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { PathConstant } from "const";

const Header = ({ className, ...otherProps }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const route = useRouter();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.root, className)}
      elevation={0}
      id="back-to-top-anchor"
      {...otherProps}
    >
      <Stack
        direction="row"
        alignItems="center"
        className={classes.stackCenter}
      >
        <AppTypography variant="h3">
          ENGLISH FOR YOU - Trang quản trị
        </AppTypography>

        <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <AccountCircleIcon />
            <AppTypography>Xin chào: Trần Sơn Đinh</AppTypography>
          </Stack>
          <AppButton
            href={PathConstant.ADMIN_SIGN_IN}
            classes={{ contained: classes.btnSignUp }}
            startIcon={<LogoutIcon />}
          >
            {getLabel("TXT_LOGOUT")}
          </AppButton>
        </Stack>
      </Stack>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default memo(Header);

const SIDEBAR_WIDTH = 214;
export const HEADER_HEIGHT = 80;
export const HEADER_HEIGHT_MOBILE = 66;
export const HEADER_ID = "HEADER_ID";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
    backgroundColor: "#2d2d2d",
    color: theme.palette.common.white,
  },
  stackCenter: {
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: theme.spacing(0, 5),
  },
  btnSignIn: {
    background: theme.palette.success.main,
    boxShadow: `0 4px 0 #459e03`,
    fontSize: 15,
    width: 110,
    "&:hover": {
      background: theme.palette.success.dark,
      boxShadow: `0 4px 0 #459e03`,
    },
  },
  btnSignUp: {
    background: "transparent",
    boxShadow: `0 4px 0 transparent`,
    fontSize: 15,
    "&:hover": {
      background: "transparent",
      boxShadow: `0 4px 0 transparent`,
    },
  },
}));
