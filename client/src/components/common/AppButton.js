import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { palette } from "public/material";
import { useTranslation } from "react-i18next";

const AppButton = forwardRef(
  (
    { color, classes, variant, loading, disabled, children, ...otherProps },
    ref
  ) => {
    const defaultClasses = useStyles({ color, loading });
    const { t: getLabel } = useTranslation();

    return (
      <Button
        classes={{
          root: clsx(defaultClasses.root, classes.root),
          contained: clsx(defaultClasses.contained, classes.contained),
          disabled: clsx(defaultClasses.disabled, classes.disabled),
          outlined: clsx(defaultClasses.outlined, classes.outlined),
          outlinedSizeSmall: clsx(
            defaultClasses.outlinedSizeSmall,
            classes.outlinedSizeSmall
          ),
        }}
        variant={variant}
        disabled={loading || disabled}
        {...otherProps}
        color="inherit"
        ref={ref}
      >
        {loading ? getLabel("TXT_LOADING_BUTTON") : children}
      </Button>
    );
  }
);

AppButton.displayName = "AppButton";

AppButton.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.object,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

AppButton.defaultProps = {
  classes: {},
  color: "attention",
  variant: "contained",
  loading: false,
  disabled: false,
};

export default memo(AppButton);

const useStyles = makeStyles((theme) => ({
  root: { "&:hover": { boxShadow: "none" } },
  contained: {
    color: "#FFFFFF",
    background: "#1cb0f6",
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 600,
    boxShadow: "0 5px 0 #1899d6",
    "&:hover": {
      background: "#4ac0f7",
      boxShadow: "0 5px 0 #1899d6",
    },
  },
  disabled: {},
  outlined: {},
  outlinedSizeSmall: {},
}));
