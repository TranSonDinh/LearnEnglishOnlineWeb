import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";
import * as ReadingActions from "./reading.redux";
import * as ListeningActions from "./listening.redux";
import * as VocabularyActions from "./vocabulary.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  readingRedux: ReadingActions.reducer,
  listeningRedux: ListeningActions.reducer,
  vocabularyRedux: VocabularyActions.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// kick off root saga
sagaMiddleware.run(rootSaga);

export default store;
