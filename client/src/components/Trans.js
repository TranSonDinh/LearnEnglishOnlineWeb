import React, { memo } from "react";
import PropTypes from "prop-types";
import { Trans as I18Trans } from "react-i18next";
import { Box, Link, Button } from "@mui/material";
import { AppTypography } from "./common";
import { useTheme } from "@mui/styles";

const Trans = ({ href, linkProps, buttonProps, textProps, ...otherProps }) => {
  const theme = useTheme();

  return (
    <Box
      component={I18Trans}
      components={{
        bold: <strong />,
        whiteColor: <Box component="span" color="common.white" />,
        warningColor: <Box component="span" color="warning.main" />,
        blueColor: (
          <Box component="span" color={theme.palette.attention.main} />
        ),
        errorColor: <Box component="span" color={theme.palette.error.main} />,
        successColor: (
          <Box component="span" color={theme.palette.success.main} />
        ),
        a: (
          <Link
            href={href}
            target="_blank"
            underline="none"
            color="inherit"
            {...linkProps}
          />
        ),
        typography: <AppTypography {...textProps} />,
        button: <Button disableRipple {...buttonProps} />,
        br: <br />,
      }}
      {...otherProps}
    />
  );
};

Trans.propTypes = {
  href: PropTypes.string,
  buttonProps: PropTypes.object,
  textProps: PropTypes.object,
  linkProps: PropTypes.object,
};

export default memo(Trans);
