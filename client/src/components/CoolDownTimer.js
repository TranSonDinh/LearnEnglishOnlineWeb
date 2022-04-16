import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AppTypography } from "./common";
import {
  convertTimeToSpecificDigits,
  getSpecificCoolingTime,
} from "pages/testing/helper";

const CoolDownTimer = ({ timeRemaining, ...otherProps }) => {
  const [label, setLabel] = useState("");
  const timeRemainingRef = useRef(timeRemaining);

  useEffect(() => {
    let countInterval;
    if (timeRemainingRef.current < 0) return;

    let coolDownTime = timeRemainingRef.current;

    setLabel(formatCountDownLabel(coolDownTime));

    countInterval = setInterval(() => {
      if (coolDownTime === 0) {
        clearTimeout(countInterval);
      } else {
        coolDownTime -= 1;
        setLabel(formatCountDownLabel(coolDownTime));
      }
      timeRemainingRef.current = coolDownTime;
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, [timeRemaining]);

  return (
    <AppTypography
      variant="h2"
      color={timeRemainingRef.current <= 0 ? "error.main" : "success.main"}
      minHeight={34}
      {...otherProps}
    >
      {label}
    </AppTypography>
  );
};

CoolDownTimer.propTypes = {};

export default CoolDownTimer;

const formatCountDownLabel = (timeRemaining) => {
  const { days, hours, minutes, seconds } =
    getSpecificCoolingTime(timeRemaining);
  if (
    days < 1 ||
    (days === 1 && hours === 0 && minutes === 0 && seconds === 0)
  ) {
    const convertedHours = convertTimeToSpecificDigits(hours);
    const convertedMinutes = convertTimeToSpecificDigits(minutes);
    const convertedSeconds = convertTimeToSpecificDigits(seconds);

    return `${convertedHours}:${convertedMinutes}:${convertedSeconds}`;
  }
};
