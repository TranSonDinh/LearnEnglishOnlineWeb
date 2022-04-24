import { getApi, postApi } from "api";
import { ApiConstant } from "const";

export const getReadingList = () => {
  return getApi(ApiConstant.GET_READING_LIST);
};

export const createReading = (data) => {
  return postApi(ApiConstant.GET_READING_LIST, data);
};

export const getReadingDetail = (id) => {
  return getApi(`${ApiConstant.GET_READING_LIST}/${id}`);
};
