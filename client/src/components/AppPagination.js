import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@mui/material";

const AppPagination = (props) => {
  return (
    <Pagination
      count={10}
      variant="outlined"
      size="large"
      shape="rounded"
      sx={{ position: "absolute", bottom: "-55px" }}
    />
  );
};

AppPagination.propTypes = {};

export default AppPagination;
