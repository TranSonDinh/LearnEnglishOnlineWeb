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
  numberQuestion,
  ...otherProps
}) => {
  const { t: getLabel } = useTranslation();
  return (
    <Stack width={600} mt={2} {...otherProps}>
      <AppTypography>
        <Trans
          i18nKey={getLabel("FM_QUESTION_NUMBER", {
            number: numberQuestion,
            message: data?.title,
          })}
        />
      </AppTypography>
      {Boolean(questionContent) && questionContent}
      <RadioGroup
        value={value}
        onChange={(e) => {
          onChange(data?._id, e.target.value);
        }}
      >
        {data?.answers?.map(({ content }, index) => {
          if (content) {
            return (
              <FormControlLabel
                value={content}
                key={index}
                label={content}
                control={<Radio />}
                sx={{ width: "fit-content" }}
              />
            );
          }
        })}
      </RadioGroup>
    </Stack>
  );
};

AppQuestion.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    message: PropTypes.string,
  }),
  questionContent: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  numberQuestion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AppQuestion.defaultProps = {
  data: {},
};

export default memo(AppQuestion);

const getLabelAnswer = (number) => {
  switch (number) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
  }
};
