import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_TOKEN_INFOS } from "../actions";
import axios from "axios";
import { getTokenInfosSuccess, getTokenInfosError } from "./actions";
import { API, API_KEY } from "../../constants/server";

const getTokenInfosAsync = async (symbol) => {
  return await axios({
    url: API + `?symbol=${symbol}`,
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
    },
  });
};

function* getTokenInfos({ payload }) {
  const { symbol } = payload;
  try {
    const getResponse = yield call(getTokenInfosAsync, symbol);
    if (getResponse.status === 200) {
      // const getInfosByContractAddress = yield call(getTokenDetailsAsync,getResponse.data.data)
      console.log(getResponse.data.data[symbol.toUpperCase()]);

      yield put(
        getTokenInfosSuccess(getResponse.data.data[symbol.toUpperCase()])
      );
    }
  } catch (error) {
    console.log(error.response.data.status.error_message);
    yield put(getTokenInfosError(error.response.data.status.error_message));
  }
}
export function* watchGetTokenInfos() {
  yield takeEvery(GET_TOKEN_INFOS, getTokenInfos);
}

export default function* rootSaga() {
  yield all([fork(watchGetTokenInfos)]);
}
