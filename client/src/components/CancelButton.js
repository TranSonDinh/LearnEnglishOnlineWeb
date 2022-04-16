import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AppButton } from "./common";
import { makeStyles } from "@mui/styles";

const CancelButton = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return (
    <AppButton classes={{ contained: classes.contained }} {...props}>
      {getLabel("TXT_CANCEL")}
    </AppButton>
  );
};

CancelButton.propTypes = {};

export default memo(CancelButton);

const useStyles = makeStyles((theme) => ({
  contained: {
    background: "#fff4f4",
    border: `2px solid ${theme.palette.error.main}`,
    width: 132,
    boxShadow: `0 5px 0 ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    "&:hover": {
      background: "#fff4f4",
      boxShadow: `0 5px 0 ${theme.palette.error.main}`,
      opacity: 0.8,
    },
  },
}));
