import { getApi } from "api";
import { ApiConstant } from "const";

export const getListeningList = () => {
  return getApi(ApiConstant.GET_LISTENING_LIST);
};
