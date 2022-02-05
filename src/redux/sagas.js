import { all } from "redux-saga/effects";
import walletSagas from "./wallet/saga";

export default function* rootSaga(getState) {
  yield all([walletSagas()]);
}
