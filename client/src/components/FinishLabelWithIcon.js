import React, { memo } from "react";
import PropTypes from "prop-types";
import LabelWithIcon from "./LabelWithIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { AppTypography } from "./common";

const FinishLabelWithIcon = ({ isFinished, isSaved, ...otherProps }) => {
  return (
    <LabelWithIcon
      endAdornment={
        isSaved ? (
          <BeenhereIcon
            sx={{
              color: "error.main",
              fontSize: 32,
              position: "absolute",
              right: -10,
              top: -25,
            }}
          />
        ) : typeof isFinished === "boolean" ? (
          <CheckCircleIcon sx={{ color: "success.main", fontSize: 28 }} />
        ) : typeof isFinished === "number" ? (
          <AppTypography
            variant="caption"
            sx={{
              border: "2px solid #f6d768",
              width: 28,
              height: 28,
              borderRadius: "50%",
              padding: 0.2,
            }}
            fontWeight={700}
            color="warning.main"
          >
            {`${isFinished}%`}
          </AppTypography>
        ) : (
          <></>
        )
      }
      {...otherProps}
    />
  );
};

FinishLabelWithIcon.propTypes = {
  isFinished: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  isSaved: PropTypes.bool,
};

export default memo(FinishLabelWithIcon);
