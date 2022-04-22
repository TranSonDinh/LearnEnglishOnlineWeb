import axios from "axios";
import { ApiConstant } from "const";

export const getApi = (url) => axios.get(ApiConstant.BASE_URL + url);
export const postApi = (url, payload) =>
  axios.post(ApiConstant.BASE_URL + url, payload);
