import { getApi } from "api";
import { ApiConstant } from "const";

export const getReadingList = () => {
  return getApi(ApiConstant.GET_READING_LIST);
};
