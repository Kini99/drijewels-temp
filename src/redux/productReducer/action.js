import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`${process.env.REACT_APP_SERVER}/products`, newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getAllProducts = (params) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(
      `${process.env.REACT_APP_SERVER}/products?page=${
        params.page ? params.page : 1
      }&sort=${
        params.sort ? params.sort : JSON.stringify({ updatedAt: "desc" })
      }&limit=${params.limit ? params.limit : 12}`
    )
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getSearchedProducts = (query) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${process.env.REACT_APP_SERVER}/products?search=${query}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getProducts = (params) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  if (params.categoryNumber) {
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/products?categoryNumber=${
          params.categoryNumber
        }&page=${params.page ? params.page : 1}&sort=${
          params.sort ? params.sort : JSON.stringify({})
        }&limit=${params.limit ? params.limit : 12}&minPrice=${
          params.minPrice ? params.minPrice : 1000
        }&maxPrice=${params.maxPrice ? params.maxPrice : 20000}`
      )
      .then((res) => {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  } else if (params.collectionNumber) {
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/products?collectionNumber=${
          params.collectionNumber
        }&page=${params.page ? params.page : ""}&sort=${
          params.sort ? params.sort : {}
        }&limit=${params.limit ? params.limit : ""}`
      )
      .then((res) => {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  } else {
    dispatch({ type: PRODUCT_FAILURE });
  }
};

export const getProductsById = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${process.env.REACT_APP_SERVER}/products/${id}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  let payload = [];
  axios.get(`${process.env.REACT_APP_SERVER}/products`).then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });
  // filter the data

  return axios
    .delete(`${process.env.REACT_APP_SERVER}/products/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .patch(`${process.env.REACT_APP_SERVER}/products/${id}`, data)
    .then((res) => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
