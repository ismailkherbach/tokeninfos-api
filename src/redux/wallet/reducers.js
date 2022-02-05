import {
  GET_TOKEN_INFOS,
  GET_TOKEN_INFOS_SUCCESS,
  GET_TOKEN_INFOS_ERROR,
} from "../actions";

const INIT_STATE = {
  error: "",
  loading: false,
  token_infos: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TOKEN_INFOS:
      return { ...state, loading: true };
    case GET_TOKEN_INFOS_SUCCESS:
      return { ...state, loading: false, token_infos: action.payload };
    case GET_TOKEN_INFOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
