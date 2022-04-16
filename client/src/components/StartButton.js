import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppButton } from "./common";

const StartButton = () => {
  return <AppButton>làm bài</AppButton>;
};

StartButton.propTypes = {};

export default memo(StartButton);
