import axios from "axios";
import {
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_SUCCESS,
  PATCH_CATEGORY_SUCCESS,
  POST_CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  CATEGORY_REQUEST,
} from "../actionTypes";

export const addCategory = (newCategory) => (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });
  axios
    .post(`${process.env.REACT_APP_SERVER}/categories`, newCategory)
    .then((res) => {
      dispatch({ type: POST_CATEGORY_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_FAILURE });
    });
};

export const getCategory = () => (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });
  axios
    .get(`${process.env.REACT_APP_SERVER}/categories`)
    .then((res) => {
      dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_FAILURE });
    });
};

export const getCategoryById = (id) => async(dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });
  await axios
    .get(`${process.env.REACT_APP_SERVER}/categories/${id}`)
    .then((res) => {
      dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_FAILURE });
    });
};

export const deleteCategory = (id) => (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });

  let payload = [];
  axios.get(`${process.env.REACT_APP_SERVER}/categories`).then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });
  // filter the data

  return axios
    .delete(`${process.env.REACT_APP_SERVER}/categories/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_FAILURE });
    });
};

export const editCategory = (id, data) => (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });
  axios
    .patch(`${process.env.REACT_APP_SERVER}/categories/${id}`, data)
    .then((res) => {
      dispatch({ type: PATCH_CATEGORY_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_FAILURE });
    });
};
