import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  login: ["data"],
  logout: [],
  success: ["data"],
  failure: ["data"],
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  account: null,
};

/* ------------- Reducers ------------- */

export const login = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});

export const success = (state, action) => {
  const data = action.data || {};
  return {
    ...state,
    isFetching: false,
    ...data,
  };
};

export const failure = (state, action) => {
  const data = action.data || {};
  return {
    ...state,
    isFetching: false,
    ...data,
  };
};

export const logout = (state) => ({
  ...state,
  account: null,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
