import { deleteApi, getApi, postApi } from "api";
import { ApiConstant } from "const";

export const getVocabularyList = () => {
  return getApi(ApiConstant.GET_VOCABULARY_LIST);
};

export const createVocabulary = (data) => {
  return postApi(ApiConstant.GET_VOCABULARY_LIST, data);
};

export const deleteVocabulary = (data) => {
  return deleteApi(ApiConstant.GET_VOCABULARY_LIST, { data: data });
};

export const updateVocabulary = (data) => {
  return postApi(`${ApiConstant.GET_VOCABULARY_LIST}/update`, data);
};
