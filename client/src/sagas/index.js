import { takeLatest, takeEvery, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { ReadingTypes } from "redux/reading.redux";

/* ------------- Sagas ------------- */
import { getReadingList } from "./reading.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([takeLatest(ReadingTypes.GET_READING_LIST, getReadingList)]);
}
