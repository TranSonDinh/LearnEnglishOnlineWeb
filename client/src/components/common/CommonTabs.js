import React, { memo } from "react";
import PropTypes from "prop-types";
import AppPaper from "components/common/AppPaper";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const CommonTabs = ({ tabs, sx }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <AppPaper
      elevation={3}
      sx={{ overflow: "hidden", width: 324, borderRadius: 24, ...sx }}
      classes={{ root: classes.root }}
    >
      {tabs.map(({ label, path }) => {
        const isActive = router.pathname === path;

        return (
          <Button
            key={path}
            onClick={() => router.push(path)}
            className={clsx({ [classes.selected]: isActive }, classes.button)}
          >
            <Typography variant="h6">{label}</Typography>
          </Button>
        );
      })}
    </AppPaper>
  );
};

CommonTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string })
  ).isRequired,
  sx: PropTypes.object,
};

export default memo(CommonTabs);

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[600],
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 0, 2),
      display: "flex",
    },
  },
  button: {
    borderRadius: theme.spacing(3),
    background: "transparent",
    color: theme.palette.grey[400],

    padding: theme.spacing(1.25, 6),
    flexGrow: 1,
    "&:hover": {
      background: "transparent",
    },
    minWidth: 172,
    [theme.breakpoints.down("lg")]: {
      minWidth: 162,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 114,
      padding: theme.spacing(1.125, 1),
      color: theme.palette.grey[400],
      "&:nth-child(2)": {
        minWidth: 100,
      },
    },
  },
  selected: {
    color: theme.palette.common.white,
    background: theme.palette.grey[400],
    "&:hover": {
      background: theme.palette.grey[400],
    },
  },
}));
