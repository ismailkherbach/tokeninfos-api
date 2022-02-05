import {
  GET_TOKEN_INFOS,
  GET_TOKEN_INFOS_ERROR,
  GET_TOKEN_INFOS_SUCCESS,
} from "../actions";

export const getTokenInfos = (symbol) => {
  return {
    type: GET_TOKEN_INFOS,
    payload: symbol,
  };
};

export const getTokenInfosSuccess = (token_infos) => {
  return {
    type: GET_TOKEN_INFOS_SUCCESS,
    payload: token_infos,
  };
};

export const getTokenInfosError = (token_infos) => {
  return {
    type: GET_TOKEN_INFOS_ERROR,
    payload: token_infos,
  };
};
