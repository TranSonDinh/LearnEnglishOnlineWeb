import React, { memo } from "react";
import PropTypes from "prop-types";
import { Select as MuiSelect, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import AppTypography from "./AppTypography";

const AppSelect = ({
  options,
  classes,
  MenuProps,
  valueProps,
  ...otherProps
}) => {
  const defaultClasses = useStyles();
  const {
    select: selectClassName,
    icon: iconClassName,
    root: rootClassName,
    ...otherClassName
  } = classes;
  const {
    classes: menuClasses = {},
    MenuItemProps = {},
    ...otherMenuProps
  } = MenuProps;
  const {
    classes: menuItemClasses = {},
    menuLabelProps,
    ...otherMenuItemProps
  } = MenuItemProps;
  const { sx: sxValue = {}, ...otherValueProps } = valueProps;
  const { paper, list, ...otherMenuClasses } = menuClasses;
  const { menuItem, selected, ...otherMenuItemClasses } = menuItemClasses;

  return (
    <MuiSelect
      classes={{
        root: clsx(defaultClasses.root, rootClassName),
        select: clsx(defaultClasses.select, selectClassName),
        icon: clsx(defaultClasses.icon, iconClassName),
        ...otherClassName,
      }}
      MenuProps={{
        classes: {
          paper: clsx(defaultClasses.menuPaper, paper),
          list: clsx(defaultClasses.menuList, list),
          ...otherMenuClasses,
        },
        ...otherMenuProps,
      }}
      renderValue={(value) => {
        return (
          <AppTypography
            variant="body2"
            className="ellipsis"
            lineHeight="unset"
            sx={{ display: "block", ...sxValue }}
            {...otherValueProps}
          >
            {options.find((option) => option.value === value)?.label}
          </AppTypography>
        );
      }}
      {...otherProps}
    >
      {options.map((option) => {
        const { value, label } = option;
        return (
          <MenuItem
            key={value}
            value={value}
            classes={{
              root: clsx(defaultClasses.menuItem, menuItem),
              selected: clsx(defaultClasses.selected, selected),
              ...otherMenuItemClasses,
            }}
            {...otherMenuItemProps}
          >
            <AppTypography
              variant="body2"
              align="center"
              width="100%"
              {...menuLabelProps}
            >
              {label}
            </AppTypography>
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
};

AppSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.node.isRequired,
    })
  ),
  classes: PropTypes.object,
  MenuProps: PropTypes.shape({
    classes: PropTypes.object,
    MenuItemProps: PropTypes.object,
  }),
  valueProps: PropTypes.object,
};

AppSelect.defaultProps = {
  classes: {},
  options: [],
  MenuProps: {},
  valueProps: {},
};

export default memo(AppSelect);

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.grey[100]}`,
    width: 172,
    height: 40,
    "& [class*='notchedOutline']": {
      border: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: 140,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 100,
      width: "fit-content",
    },
  },
  select: {
    padding: theme.spacing(1.25, 2),
  },
  icon: {
    "&$icon": {
      width: 12,
      height: 7,
    },
    top: "auto",
    right: theme.spacing(2),
  },
  menuPaper: {
    backgroundColor: theme.palette.grey[200],
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.14)",
    marginTop: theme.spacing(1),
    width: 172,
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    whiteSpace: "initial",
    padding: theme.spacing(1.5, 2),
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  selected: {
    width: "100%",
    "&$selected, &$selected:hover, &$selected:focus": {
      backgroundColor: theme.palette.grey[200],
    },
  },
}));
