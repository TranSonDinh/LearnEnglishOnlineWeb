import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import AdminLayout from "layouts/AdminLayout";
import { AppButton, AppSelect, AppTypography } from "components/common";
import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const Listening = (props) => {
  const classes = useStyles();
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(MOCK_DATA);

  const requestSearch = (searchedVal) => {
    const filteredRows = MOCK_DATA.filter((row) => {
      return Object.keys(row).some((key) =>
        row[key].toLowerCase().includes(searchedVal)
      );
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <AdminLayout>
      <Stack flexGrow={1} spacing={2} sx={{ px: 4, pt: 5, pb: 4 }}>
        <AppTypography variant="h3">Quản lý Đề Thi</AppTypography>
        <AppButton classes={{ contained: classes.contained }}>
          Thêm mới
        </AppButton>
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <TextField
            className={classes.search}
            id="outlined-basic"
            variant="outlined"
            placeholder="Tìm kiếm"
          />
          <IconButton className={classes.buttonSearch}>
            <SearchIcon />
          </IconButton>
        </Stack>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </AdminLayout>
  );
};

Listening.propTypes = {};

export default memo(Listening);

const useStyles = makeStyles((theme) => ({
  contained: {
    width: 200,
    background: theme.palette.success.main,
    borderRadius: 5,
    boxShadow: "unset",
    "&:hover": {
      background: theme.palette.success.main,
      boxShadow: "unset",
    },
  },
  filterButton: {
    width: 100,
    height: 40,
    background: theme.palette.success.main,
    borderRadius: 5,
    boxShadow: "unset",
    "&:hover": {
      background: theme.palette.success.main,
      boxShadow: "unset",
    },
  },
  search: {
    "& .MuiOutlinedInput-root": {
      height: 40,
      width: 200,
      "& fieldset": {
        border: `2px solid ${theme.palette.grey[100]}`,
      },
      "&:hover fieldset": {
        border: `2px solid ${theme.palette.grey[100]}`,
      },
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.grey[100]}`,
      },
    },
  },
  buttonSearch: {
    color: theme.palette.grey[400],
    border: `2px solid ${theme.palette.grey[100]}`,
  },
}));

const MOCK_DATA = [
  { name: "Pizza", calories: "200", fat: "6.0", carbs: "24", protein: "4.0" },
  {
    name: "Hot Dog",
    calories: "300",
    fat: "6.0",
    carbs: "24",
    protein: "4.0",
  },
  {
    name: "Burger",
    calories: "400",
    fat: "6.0",
    carbs: "24",
    protein: "4.0",
  },
  {
    name: "Hamburger",
    calories: "500",
    fat: "6.0",
    carbs: "24",
    protein: "4.0",
  },
  { name: "Fries", calories: "600", fat: "6.0", carbs: "24", protein: "4.0" },
  {
    name: "Ice Cream",
    calories: "700",
    fat: "6.0",
    carbs: "24",
    protein: "4.0",
  },
];
