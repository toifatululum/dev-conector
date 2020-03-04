import { GET_POSTS, POST_ERROR } from "../actions/types";
const initialState = {
  post: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        postas: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        postas: payload,
        loading: false
      };
    default:
      return state;
  }
}
