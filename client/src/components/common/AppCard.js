import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import AppTypography from "./AppTypography";
import { makeStyles } from "@mui/styles";

const AppCard = ({ classes, ...otherProps }) => {
  const defaultClasses = useStyles();

  return <></>;
};

AppCard.propTypes = {
  classes: PropTypes.object,
};

export default memo(AppCard);

const useStyles = makeStyles((theme) => ({
  root: {},
}));
