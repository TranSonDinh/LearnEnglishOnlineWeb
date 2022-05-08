import { deleteApi, getApi, postApi } from "api";
import { ApiConstant } from "const";

export const getListeningList = () => {
  return getApi(ApiConstant.GET_LISTENING_LIST);
};

export const createListening = (data) => {
  return postApi(ApiConstant.GET_LISTENING_LIST, data);
};

export const getListeningDetail = (id) => {
  return getApi(`${ApiConstant.GET_LISTENING_LIST}/${id}`);
};

export const deleteListening = (data) => {
  return deleteApi(ApiConstant.GET_LISTENING_LIST, { data: data });
};

export const updateListening = (data) => {
  return postApi(`${ApiConstant.GET_LISTENING_LIST}/update`, data);
};
