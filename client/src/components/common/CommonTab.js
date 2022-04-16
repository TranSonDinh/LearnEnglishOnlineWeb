import React, { memo } from "react";
import { Tab, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import clsx from "clsx";

const CommonTab = ({ label, classes, ...otherProps }) => {
  const defaultClasses = useStyles();

  return (
    <Box className={clsx(defaultClasses.wrapper, classes.wrapper)}>
      <Tab
        label={label}
        classes={{
          ...classes,
          root: clsx(defaultClasses.tabRoot, classes.root),
          selected: clsx(defaultClasses.selected, classes.selected),
        }}
        disableRipple
        disableFocusRipple
        {...otherProps}
      />
    </Box>
  );
};

export default memo(CommonTab);

CommonTab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  classes: PropTypes.object,
};
CommonTab.defaultProps = {
  classes: {},
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    minWidth: 132,
  },
  tabRoot: {
    width: "100%",
    color: "white",
    height: "100%",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    "&:not(:first-child)": {
      marginLeft: 30,
    },
    [theme.breakpoints.down(1150)]: {
      "&:not(:first-child)": {
        display: "none",
      },
    },
  },
  selected: {
    "&$selected": {
      color: "#6dff00",
    },
  },
}));
