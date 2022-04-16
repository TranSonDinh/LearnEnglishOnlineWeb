import { AppConstant } from "const";
import { intervalToDuration } from "date-fns";

export const getSpecificCoolingTime = (secondsRemaining) => {
  const { years, months, days, hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: secondsRemaining * 1000,
  });

  return { years, months, days, hours, minutes, seconds };
};

export const convertTimeToSpecificDigits = (
  value,
  totalDigits = 2,
  fallback = AppConstant.NOT_HAVE_VALUE
) => {
  if (!value && Number(value) !== 0) {
    return fallback;
  } else {
    return String(value).padStart(totalDigits, "0");
  }
};
