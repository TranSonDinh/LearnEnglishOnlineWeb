import React, { memo } from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { palette } from "public/material";
import clsx from "clsx";

const AppPaper = ({
  children,
  background,
  borderColor,
  classes,
  ...otherProps
}) => {
  const defaultClasses = useStyles({ background, borderColor });

  return (
    <Paper
      classes={{
        root: clsx(defaultClasses.root, classes?.root),
        elevation: clsx(defaultClasses.elevation, classes?.elevation),
        elevation1: clsx(defaultClasses.elevation1, classes?.elevation1),
        elevation2: clsx(defaultClasses.elevation2, classes?.elevation2),
        elevation3: clsx(defaultClasses.elevation3, classes?.elevation3),
        elevation4: clsx(defaultClasses.elevation4, classes?.elevation4),
        elevation5: clsx(defaultClasses.elevation5, classes?.elevation5),
        elevation6: clsx(defaultClasses.elevation6, classes?.elevation6),
        elevation7: clsx(defaultClasses.elevation7, classes?.elevation7),
      }}
      {...otherProps}
    >
      {children}
    </Paper>
  );
};

export default memo(AppPaper);

AppPaper.propTypes = {
  borderColor: PropTypes.string,
  background: PropTypes.string,
  classes: PropTypes.object,
};
AppPaper.defaultProps = {
  background: "light",
  borderColor: "transparent",
};

const BORDER_WIDTH = 2;

const getBackground = (background) => {
  switch (background) {
    case "light":
      return palette.background.paper;
    case "dark":
      return palette.grey[800];
    default:
      return background;
  }
};

const useStyles = makeStyles((theme) => ({
  root: ({ background, borderColor }) => ({
    background: getBackground(background),
    borderRadius: theme.spacing(3),
    boxShadow: "none",
    position: "relative",
    backgroundSize: "cover",
    "&:after, &:before": {
      content: '""',
      width: `calc(100% + ${BORDER_WIDTH * 2}px)`,
      height: `calc(100% + ${BORDER_WIDTH * 2}px)`,
      top: -BORDER_WIDTH,
      left: -BORDER_WIDTH,
      position: "absolute",
      borderRadius: "inherit",
    },
    "&:after": {
      background: borderColor,
      zIndex: -2,
    },
    "&:before": {
      zIndex: -3,
      backgroundSize: "cover",
      background:
        borderColor === "transparent" ? borderColor : getBackground(background),
    },
  }),
  elevation: {
    padding: theme.spacing(3),
  },
  elevation1: {
    padding: theme.spacing(2, 5),
  },
  elevation2: {
    padding: theme.spacing(3, 5),
  },
  elevation3: {
    padding: 0,
  },
  elevation4: {
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.0698) 85.21%, rgba(255, 255, 255, 0.093) 100%)",
  },
  elevation5: {
    padding: theme.spacing(2, 3),
  },
  elevation6: {
    padding: theme.spacing(1, 3),
  },
  elevation7: {
    padding: theme.spacing(5),
  },
}));
