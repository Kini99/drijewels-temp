import axios from "axios";
import {
  DELETE_COLLECTION_SUCCESS,
  GET_COLLECTION_SUCCESS,
  PATCH_COLLECTION_SUCCESS,
  POST_COLLECTION_SUCCESS,
  COLLECTION_FAILURE,
  COLLECTION_REQUEST,
} from "../actionTypes";

export const addCollection = (newCollection) => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });
  axios
    .post(`${process.env.REACT_APP_SERVER}/collections`, newCollection)
    .then((res) => {
      dispatch({ type: POST_COLLECTION_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: COLLECTION_FAILURE });
    });
};

export const getCollection = () => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });
  axios
    .get(`${process.env.REACT_APP_SERVER}/collections`)
    .then((res) => {
      dispatch({ type: GET_COLLECTION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COLLECTION_FAILURE });
    });
};

export const getCollectionById = (id) => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });
  axios
    .get(`${process.env.REACT_APP_SERVER}/collections/${id}`)
    .then((res) => {
      dispatch({ type: GET_COLLECTION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COLLECTION_FAILURE });
    });
};

export const deleteCollection = (id) => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });

  let payload = [];
  axios.get(`${process.env.REACT_APP_SERVER}/collections`).then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });
  // filter the data

  return axios
    .delete(`${process.env.REACT_APP_SERVER}/collections/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_COLLECTION_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: COLLECTION_FAILURE });
    });
};

export const editCollection = (id, data) => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });
  axios
    .patch(`${process.env.REACT_APP_SERVER}/collections/${id}`, data)
    .then((res) => {
      dispatch({ type: PATCH_COLLECTION_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: COLLECTION_FAILURE });
    });
};
