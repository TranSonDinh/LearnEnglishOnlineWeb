import React, { memo } from "react";
import FinishLabelWithIcon from "components/FinishLabelWithIcon";
import AppButton from "./AppButton";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import AppTypography from "./AppTypography";
import { IconButton, Stack } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const AppContent = ({
  title,
  description,
  isFinished,
  isSaved,
  example,
  onClick,
}) => {
  const { t: getLabel } = useTranslation();

  return (
    <>
      <Stack
        sx={{ width: "100%", alignItems: "flex-start", position: "relative" }}
      >
        <FinishLabelWithIcon isFinished={isFinished} isSaved={isSaved}>
          {title}
        </FinishLabelWithIcon>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          {description}
        </AppTypography>
        {example && <AppTypography>{example}</AppTypography>}
      </Stack>
      {example ? (
        <IconButton
          p={0.5}
          sx={{
            color: {
              background: "#e5e5e5",
              "&:hover": { background: "#d6d3d3" },
            },
          }}
          onClick={onClick}
        >
          <VolumeUpIcon sx={{ color: "grey.400", fontSize: 36 }} />
        </IconButton>
      ) : (
        <AppButton sx={{ width: "100px" }} onClick={onClick}>
          {isFinished ? getLabel("TXT_REDO") : getLabel("TXT_START")}
        </AppButton>
      )}
    </>
  );
};

AppContent.propTypes = {
  isFinished: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.node,
  description: PropTypes.string,
  isSaved: PropTypes.bool,
  onClick: PropTypes.func,
};
AppContent.defaultProps = {};

export default memo(AppContent);
