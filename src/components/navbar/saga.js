import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { UPDATE_THEME } from "../../constants/actions";
import { updateThemeSuccess } from "./actions";

const doUpdateTheme = function* () {
  console.log("came to saga");
  yield put(updateThemeSuccess());
};

export default function* actionWatcher() {
  console.log("came to saga");

  yield takeLatest(UPDATE_THEME, doUpdateTheme);
}
