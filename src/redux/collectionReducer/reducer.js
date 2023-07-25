/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  DELETE_COLLECTION_SUCCESS,
  GET_COLLECTION_SUCCESS,
  PATCH_COLLECTION_SUCCESS,
  POST_COLLECTION_SUCCESS,
  COLLECTION_FAILURE,
  COLLECTION_REQUEST,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  collections: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COLLECTION_REQUEST:
      return { ...state, isLoading: true };
    case COLLECTION_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_COLLECTION_SUCCESS:
      return { ...state, isLoading: false };
    case GET_COLLECTION_SUCCESS:
      return { ...state, isLoading: false, collections: payload };
    case DELETE_COLLECTION_SUCCESS:
      return { ...state, isLoading: false, collections: payload };
    case PATCH_COLLECTION_SUCCESS:
      return { ...state, isLoading: false, collections: payload };
    default:
      return state;
  }
};
