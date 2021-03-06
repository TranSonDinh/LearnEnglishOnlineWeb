import { getApi, postApi } from "api";
import { ApiConstant } from "const";

export const signUp = (data) => {
  return postApi(ApiConstant.SIGN_UP, data);
};

export const login = (data) => {
  return postApi(ApiConstant.SIGN_IN, data);
};

export const updateReading = (data) => {
  return postApi(ApiConstant.UPDATE_READING, data);
};

export const updateListening = (data) => {
  return postApi(ApiConstant.UPDATE_LISTENING, data);
};

export const updateVocabulary = (data) => {
  return postApi(ApiConstant.UPDATE_VOCABULARY, data);
};
