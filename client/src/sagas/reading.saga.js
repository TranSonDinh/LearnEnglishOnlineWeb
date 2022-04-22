import { ApiConstant } from "const";
import { call, put } from "redux-saga/effects";
import { ReadingService } from "services";
import ReadingActions from "redux/reading.redux";

export function* getReadingList() {
  try {
    let response = yield call(ReadingService.getReadingList);
    if (response.status === ApiConstant.STT_OK) {
      yield put(ReadingActions.success({ readings: response.data }));
    } else {
      yield put(ReadingActions.failure(response));
    }
  } catch (error) {
    yield put(ReadingActions.failure(error.message));
  }
}
