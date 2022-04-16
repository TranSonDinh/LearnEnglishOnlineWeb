import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { AppTypography } from "./common";
import { useTranslation } from "react-i18next";
import { Trans } from "components";

const AppQuestion = ({ data, ...otherProps }) => {
  const { t: getLabel } = useTranslation();

  return (
    <Stack width={600} mt={2} {...otherProps}>
      <AppTypography>
        <Trans
          i18nKey={getLabel("FM_QUESTION_NUMBER", {
            number: data?.numberQuestion,
            message: data?.message,
          })}
        />
      </AppTypography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={data?.choose?.[0].value}
      >
        {data?.choose?.map(({ value, label }) => (
          <FormControlLabel value={value} label={label} control={<Radio />} />
        ))}
      </RadioGroup>
    </Stack>
  );
};

AppQuestion.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    message: PropTypes.string,
    numberQuestion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

AppQuestion.defaultProps = {
  data: {},
};

export default memo(AppQuestion);
