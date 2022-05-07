import React, { memo, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import { AppButton, AppTypography } from "components/common";
import { useTranslation } from "react-i18next";
import HeaderTabs from "./HeaderTabs";
import { ImageConstant, PathConstant } from "const";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeActions from "redux/home.redux";
import Cookie from "js-cookie";

const Header = ({ className, ...otherProps }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();

  const [isShow, toggleShow] = useReducer(
    (currentState, nextState) => nextState ?? !currentState,
    false
  );

  const accountRedux = useSelector(({ homeRedux }) => homeRedux.account);
  const isFetching = useSelector(({ homeRedux }) => homeRedux.isFetching);

  const onChangePassword = () => {};

  const onLogout = () => {
    dispatch(HomeActions.logout());
    Cookie.remove("account");
  };

  useEffect(() => {
    const hasAccount = Cookie.get("account");
    if (hasAccount) {
      const arr = hasAccount.split(" ");
      dispatch(HomeActions.login({ username: arr[0], password: arr[1] }));
    }
  }, [dispatch]);

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
        <Button href={PathConstant.ROOT}>
          <Box component="img" src={ImageConstant.Logo} sx={{ height: 70 }} />
        </Button>
        <HeaderTabs />
        {accountRedux ? (
          <Box>
            <Button
              onClick={() => toggleShow()}
              classes={{
                endIcon: clsx(classes.arrowDrop, {
                  [classes.arrowTop]: isShow,
                }),
              }}
              endIcon={<ArrowDropDownIcon />}
              disableRipple
              sx={{ color: "#fff" }}
            >
              <AppTypography
                sx={{ textTransform: "uppercase" }}
                fontWeight="bold"
              >
                {accountRedux.username}
              </AppTypography>
            </Button>
            <Menu
              open={isShow}
              classes={{ paper: classes.menu }}
              onClose={() => toggleShow(false)}
            >
              <MenuItem onClick={onChangePassword}>Đổi mật khẩu</MenuItem>
              <MenuItem onClick={onLogout}>Đăng xuất</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Stack direction="row" spacing={1.5}>
            <AppButton
              href={PathConstant.SIGN_IN}
              classes={{ contained: classes.btnSignIn }}
            >
              {getLabel("TXT_SIGN_IN")}
            </AppButton>
            <AppButton
              href={PathConstant.SIGN_UP}
              classes={{ contained: classes.btnSignUp }}
            >
              {getLabel("TXT_SIGN_UP")}
            </AppButton>
          </Stack>
        )}
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
    backgroundColor: theme.palette.background.dark,
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
    background: theme.palette.common.white,
    boxShadow: `0 4px 0 ${theme.palette.grey.A100}`,
    color: theme.palette.text.secondary,
    fontSize: 15,
    width: 110,
    "&:hover": {
      background: theme.palette.grey[100],
      boxShadow: `0 4px 0 ${theme.palette.grey.A100}`,
    },
  },
  arrowTop: {
    transform: "scale(-1)",
  },
  menu: {
    top: "50px!important",
    right: 30,
    left: "unset!important",
  },
}));
