/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

import {
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_SUCCESS,
  PATCH_CATEGORY_SUCCESS,
  POST_CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  CATEGORY_REQUEST,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  categories: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORY_REQUEST:
      return { ...state, isLoading: true };
    case CATEGORY_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case POST_CATEGORY_SUCCESS:
      return { ...state, isLoading: false };
    case GET_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    case PATCH_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categories: payload };
    default:
      return state;
  }
};
