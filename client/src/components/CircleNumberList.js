import React, { memo } from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { AppCircleNumber } from "./common";

const CircleNumberList = ({ from, to, selectedList, onClick }) => {
  const createRange = (from, to) => {
    var range = [];
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", width: 280, my: 4 }}>
      {createRange(from, to).map((item, index) => {
        const isSelected = selectedList?.find((number) => number == item);
        return (
          <AppCircleNumber
            key={index}
            onClick={() => onClick(item)}
            isSelected={Boolean(isSelected)}
          >
            {item}
          </AppCircleNumber>
        );
      })}
    </Stack>
  );
};

CircleNumberList.propTypes = {
  onClick: PropTypes.func,
};

export default memo(CircleNumberList);
