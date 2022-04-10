import { AppConstant, ApiConstant } from "../const";
import axios from "axios";
import Cookies from "js-cookie";
import HttpService from "./http.service";
import { DEFAULT_LANG } from "const/LangConstant";

export const defaultConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: { ...ApiConstant.HEADER_DEFAULT },
  timeout: ApiConstant.TIMEOUT,
};

export const configWithParams = {
  ...defaultConfig,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(params)) {
      const param = params[key];

      if (!Array.isArray(param)) {
        searchParams.append(key, param);
      } else if (!param.length) {
        searchParams.append(key, "");
      } else {
        searchParams.append(key, param.map((item) => String(item)).join(","));
      }
    }
    return searchParams;
  },
};

const getCredential = (config = {}) => {
  const tfda = Cookies.get(AppConstant.KEY_TFDA);
  const languageKey = getStorageItem(AppConstant.LANGUAGE_KEY);
  if (tfda) {
    const token = JSON.parse(tfda).token;
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        Authorization: `Bearer ${token}`,
        "Accept-Language": languageKey || DEFAULT_LANG,
      },
    };
  }
  return config;
};

export const createApi = (config = configWithParams) => {
  return new HttpService(axios.create(config), getCredential);
};

const api = createApi();

export default api;

export const getStorageItem = (key) => {
  const item = localStorage.getItem(key);
  if (item === null) return null;
  try {
    return JSON.parse(item);
  } catch (e) {
    console.log(e);
    return null;
  }
};
