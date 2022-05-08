import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AdminLayout from "layouts/AdminLayout";
import { AppButton, AppTypography } from "components/common";
import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import AddButton from "./AddButton";
import { useDispatch, useSelector } from "react-redux";
import ReadingActions from "redux/reading.redux";
import { formatDate } from "utils";
import { FORMAT_DATE } from "const/app.const";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const Listening = (props) => {
  const classes = useStyles();
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState([]);
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const readingsRedux = useSelector(
    ({ readingRedux }) => readingRedux.readings
  );

  const requestSearch = (searchedVal) => {
    const filteredRows = readingsRedux.filter((row) => {
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

  useEffect(() => {
    dispatch(ReadingActions.getReadingList());
  }, [dispatch]);

  return (
    <AdminLayout>
      <Stack flexGrow={1} spacing={2} sx={{ px: 4, pt: 5 }}>
        <AppTypography variant="h3">Quản lý Bài Đọc</AppTypography>
        <AddButton />
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
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "10%", fontWeight: 700 }}>
                  Số thứ tự
                </TableCell>
                <TableCell sx={{ width: "30%", fontWeight: 700 }}>
                  Tiêu đề
                </TableCell>
                <TableCell sx={{ width: "18%", fontWeight: 700 }}>
                  Ngày tạo
                </TableCell>
                <TableCell sx={{ width: "18%", fontWeight: 700 }}>
                  Ngày cập nhât mới nhất
                </TableCell>
                <TableCell sx={{ width: "auto", fontWeight: 700 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {readingsRedux?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>
                    {formatDate(row.createdAt, FORMAT_DATE)}
                  </TableCell>
                  <TableCell>
                    {formatDate(row.updatedAt, FORMAT_DATE)}
                  </TableCell>
                  <TableCell align="right">
                    <UpdateButton data={row} />
                    <DeleteButton id={row?._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {Math.floor(readingsRedux.length / 10) > 0 && (
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            sx={{ overflow: "hidden" }}
            count={Math.floor(readingsRedux.length / 10)}
            rowsPerPage={10}
            page={1}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        )}
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
  table: {},
}));
