// Common
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const TIMEOUT = 30000;
//Fixed value
// HTTP Status
export const STT_OK = 200;
export const STT_OK_1 = 201;

export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;

export const BASE_URL = "http://localhost:3003";

export const GET_READING_LIST = "/readings";
export const GET_LISTENING_LIST = "/listenings";
export const GET_TESTING_LIST = "/testings";
export const GET_VOCABULARY_LIST = "/vocabulary";
export const SIGN_UP = "/sign-up";
export const SIGN_IN = "/sign-in";
