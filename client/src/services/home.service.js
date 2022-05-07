import { getApi, postApi } from "api";
import { ApiConstant } from "const";

export const signUp = (data) => {
  return postApi(ApiConstant.SIGN_UP, data);
};

export const login = (data) => {
  return postApi(ApiConstant.SIGN_IN, data);
};
