import { NOT_HAVE_VALUE } from "const/app.const";
import { format } from "date-fns";
import { read, utils } from "xlsx";

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

export const handleFile = (file, onChangeData) => {
  const reader = new FileReader();
  const rABS = !!reader.readAsBinaryString;
  reader.onload = (e) => {
    const bstr = e.target.result;
    const wb = read(bstr, { type: rABS ? "binary" : "array" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = utils.sheet_to_json(ws, { header: 1 });
    data.shift();
    onChangeData(data);
  };
  if (rABS) reader.readAsBinaryString(file);
  else reader.readAsArrayBuffer(file);
};

export const formatDate = (
  date,
  formatString,
  fallback = NOT_HAVE_VALUE,
  options
) => {
  try {
    if (!date || !formatString) return fallback;
    return format(new Date(date), formatString, options);
  } catch (error) {
    return date;
  }
};
