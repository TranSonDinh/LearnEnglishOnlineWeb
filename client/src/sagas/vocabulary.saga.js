import { ApiConstant } from "const";
import { call, put } from "redux-saga/effects";
import { VocabularyService } from "services";
import VocabularyActions from "redux/vocabulary.redux";

export function* getVocabularyList() {
  try {
    let response = yield call(VocabularyService.getVocabularyList);
    if (response.status === ApiConstant.STT_OK) {
      yield put(VocabularyActions.success({ vocabulary: response.data }));
    } else {
      yield put(VocabularyActions.failure(response));
    }
  } catch (error) {
    yield put(VocabularyActions.failure(error.message));
  }
}
