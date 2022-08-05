import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchStoryDataTypeName, landingSliceActions } from "./slice";
import storyMock from "../../../mockData/storyMock";

export function* fetchStoryWatcher() {
  yield takeEvery(fetchStoryDataTypeName, fetchStoryWorker);
}

function* fetchStoryWorker(action) {
  try {
    // we can call API's directly from here in real project.
    yield put(landingSliceActions.putStoryData(storyMock));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
