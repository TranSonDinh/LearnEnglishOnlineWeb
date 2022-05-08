import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getTestingList: ["data"],
  updateTesting: ["data"],
  success: ["data"],
  failure: ["data"],
  reset: [],
});

export const TestingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  testings: [],
};

/* ------------- Reducers ------------- */
export const reset = () => ({ ...INITIAL_STATE });

export const request = (state = INITIAL_STATE) => ({
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

export const updateTesting = (state, action) => {
  const data = action.data || [];
  return {
    ...state,
    testings: data,
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.GET_TESTING_LIST]: request,
  [Types.RESET]: reset,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.UPDATE_TESTING]: updateTesting,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
