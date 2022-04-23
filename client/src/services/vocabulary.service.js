import { getApi } from "api";
import { ApiConstant } from "const";

export const getVocabularyList = () => {
  return getApi(ApiConstant.GET_VOCABULARY_LIST);
};
