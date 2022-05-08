import { ApiConstant } from "const";
import { call, put } from "redux-saga/effects";
import { ListeningService } from "services";
import ListeningActions from "redux/listening.redux";

export function* getListeningList() {
  try {
    let response = yield call(ListeningService.getListeningList);
    if (response.status === ApiConstant.STT_OK) {
      yield put(ListeningActions.success({ listenings: response.data }));
    } else {
      yield put(ListeningActions.failure(response));
    }
  } catch (error) {
    yield put(ListeningActions.failure(error.message));
  }
}
