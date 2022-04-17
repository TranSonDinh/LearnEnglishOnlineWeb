import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Button, Stack } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import { AppButton } from "components/common";
import { useTranslation } from "react-i18next";
import HeaderTabs from "./HeaderTabs";
import { ImageConstant, PathConstant } from "const";
import { useRouter } from "next/router";

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
        <Button href={PathConstant.ROOT}>
          <Box component="img" src={ImageConstant.Logo} sx={{ height: 70 }} />
        </Button>
        <HeaderTabs />
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
}));
