import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { AppTypography } from "./common";
import { useTranslation } from "react-i18next";
import { Trans } from "components";

const AppQuestion = ({
  data,
  value,
  onChange,
  questionContent,
  ...otherProps
}) => {
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
      {Boolean(questionContent) && questionContent}
      <RadioGroup value={value} onChange={() => onChange(data?.numberQuestion)}>
        {data?.choose?.map(({ value, label }, index) => (
          <FormControlLabel
            value={value}
            key={index}
            label={label}
            control={<Radio />}
            sx={{ width: "fit-content" }}
          />
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
  questionContent: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

AppQuestion.defaultProps = {
  data: {},
};

export default memo(AppQuestion);
