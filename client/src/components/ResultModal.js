import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { AppButton, AppDialog, AppTypography } from "./common";
import FinishLabelWithIcon from "./FinishLabelWithIcon";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Trans from "./Trans";

const ResultModal = ({ open, total, correctTotal, onClose }) => {
  const { t: getLabel } = useTranslation();

  const percent = useMemo(() => {
    return (100 * correctTotal) / total || 0;
  }, [total, correctTotal]);

  return (
    <AppDialog open={open}>
      <FinishLabelWithIcon>Kết quả bài làm</FinishLabelWithIcon>
      <Stack spacing={1} sx={{ my: 2 }}>
        <AppTypography>
          <Trans
            i18nKey={getLabel("FM_TOTAL_QUESTION", {
              number: total,
            })}
          />
        </AppTypography>
        <AppTypography>
          <Trans
            i18nKey={getLabel("FM_CORRECT_QUESTION", {
              number: correctTotal,
            })}
          />
        </AppTypography>
        <AppTypography>
          <Trans
            i18nKey={getLabel("FM_PERCENT_RESULT", {
              number: percent,
            })}
          />
        </AppTypography>
      </Stack>
      <AppButton onClick={onClose}>Đóng</AppButton>
    </AppDialog>
  );
};

ResultModal.propTypes = {
  total: PropTypes.number,
  correctTotal: PropTypes.number,
};

ResultModal.defaultProps = {
  total: 0,
  correctTotal: 0,
};

export default ResultModal;
