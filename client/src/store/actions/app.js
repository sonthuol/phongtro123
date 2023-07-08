import { apiGetAcreages } from "../../services/acreage";
import { apiGetCategories } from "../../services/category";
import { apiGetNewPosts } from "../../services/post";
import { apiGetPrices } from "../../services/price";
import { apiGetProvinces } from "../../services/province";
import actionType from "./actionType";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apiGetCategories();
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_CATEGORIES,
        categories: response.data.data,
        message: "",
      });
    } else {
      dispatch({
        type: actionType.GET_CATEGORIES,
        message: response.data.message,
        categories: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_CATEGORIES,
      categories: null,
    });
  }
};

export const getPrices = () => async (dispatch) => {
  try {
    const response = await apiGetPrices();
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_PRICES,
        prices: response.data.data,
        message: "",
      });
    } else {
      dispatch({
        type: actionType.GET_PRICES,
        message: response.data.message,
        prices: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_PRICES,
      prices: null,
    });
  }
};

export const getAcreages = () => async (dispatch) => {
  try {
    const response = await apiGetAcreages();
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_ACREAGES,
        acreages: response.data.data,
        message: "",
      });
    } else {
      dispatch({
        type: actionType.GET_ACREAGES,
        message: response.data.message,
        acreages: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_ACREAGES,
      acreages: null,
    });
  }
};

export const getNewPosts = () => async (dispatch) => {
  try {
    const response = await apiGetNewPosts();
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_NEW_POST,
        newPosts: response.data.data,
        message: "",
      });
    } else {
      dispatch({
        type: actionType.GET_NEW_POST,
        message: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_NEW_POST,
      newPosts: null,
    });
  }
};

export const getProvinces = () => async (dispatch) => {
  try {
    const response = await apiGetProvinces();
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_PROVINCE,
        provinces: response.data.data,
        message: "",
      });
    } else {
      dispatch({
        type: actionType.GET_PROVINCE,
        message: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_PROVINCE,
      provinces: null,
    });
  }
};
