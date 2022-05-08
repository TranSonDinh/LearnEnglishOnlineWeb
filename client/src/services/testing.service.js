import { deleteApi, getApi, postApi } from "api";
import { ApiConstant } from "const";

export const getTestingList = () => {
  return getApi(ApiConstant.GET_TESTING_LIST);
};

export const createTesting = (data) => {
  return postApi(ApiConstant.GET_TESTING_LIST, data);
};

export const getTestingDetail = (id) => {
  return getApi(`${ApiConstant.GET_TESTING_LIST}/${id}`);
};

export const deleteTesting = (data) => {
  return deleteApi(ApiConstant.GET_TESTING_LIST, { data: data });
};

export const updateTesting = (data) => {
  return postApi(`${ApiConstant.GET_TESTING_LIST}/update`, data);
};
