import { takeLatest, takeEvery, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { ReadingTypes } from "redux/reading.redux";
import { ListeningTypes } from "redux/listening.redux";
import { VocabularyTypes } from "redux/vocabulary.redux";
import { HomeTypes } from "redux/home.redux";
import { TestingTypes } from "redux/testing.redux";

/* ------------- Sagas ------------- */
import { getReadingList } from "./reading.saga";
import { getListeningList } from "./listening.saga";
import { getVocabularyList } from "./vocabulary.saga";
import { login } from "./home.saga";
import { getTestingList } from "./testing.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(ReadingTypes.GET_READING_LIST, getReadingList),
    takeLatest(ListeningTypes.GET_LISTENING_LIST, getListeningList),
    takeLatest(VocabularyTypes.GET_VOCABULARY_LIST, getVocabularyList),
    takeLatest(HomeTypes.LOGIN, login),
    takeLatest(TestingTypes.GET_TESTING_LIST, getTestingList),
  ]);
}
