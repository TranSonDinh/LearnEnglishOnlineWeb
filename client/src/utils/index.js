export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .replace(/-/g, "");
};

export const formatNumber = (
  number,
  numberOfFixed = 3,
  emptyText = AppConstant.NOT_HAVE_VALUE,
  localeOption = {}
) => {
  try {
    if (!number && number !== 0) return emptyText;
    const num = Number(number || 0);
    const maximumFractionDigits = Number.isInteger(num) ? 0 : numberOfFixed;
    return num.toLocaleString("en-US", {
      maximumFractionDigits,
      ...localeOption,
    });
  } catch (error) {
    window.isDebug && console.log(error);
    return number;
  }
};
