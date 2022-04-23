import { takeLatest, takeEvery, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { ReadingTypes } from "redux/reading.redux";
import { ListeningTypes } from "redux/listening.redux";
import { VocabularyTypes } from "redux/vocabulary.redux";

/* ------------- Sagas ------------- */
import { getReadingList } from "./reading.saga";
import { getListeningList } from "./listening.saga";
import { getVocabularyList } from "./vocabulary.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(ReadingTypes.GET_READING_LIST, getReadingList),
    takeLatest(ListeningTypes.GET_LISTENING_LIST, getListeningList),
    takeLatest(VocabularyTypes.GET_VOCABULARY_LIST, getVocabularyList),
  ]);
}
