import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getVocabularyList: ["data"],
  updateVocabulary: ["data"],
  success: ["data"],
  failure: ["data"],
  reset: [],
});

export const VocabularyTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  vocabulary: [],
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

export const updateVocabulary = (state, action) => {
  const data = action.data || [];
  return {
    ...state,
    vocabulary: data,
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.GET_VOCABULARY_LIST]: request,
  [Types.RESET]: reset,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.UPDATE_VOCABULARY]: updateVocabulary,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
