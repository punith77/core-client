import { all, fork } from "redux-saga/effects";
import navbarSaga from "./components/navbar/saga";
// add sagas here
export default function* rootSaga() {
  yield [fork(navbarSaga)];
}
