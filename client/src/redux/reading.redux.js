import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getReadingList: ["data"],
  updateReading: ["data"],
  success: ["data"],
  failure: ["data"],
  reset: [],
});

export const ReadingTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  readings: [],
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

export const updateReading = (state, action) => {
  const data = action.data || [];
  return {
    ...state,
    readings: data,
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.GET_READING_LIST]: request,
  [Types.RESET]: reset,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.UPDATE_READING]: updateReading,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
