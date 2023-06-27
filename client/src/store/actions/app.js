import { apiGetCategories } from "../../services/category";
import actionType from "./actionType";

export const getCategories = () => async (dispatch) => {
  try {
    const response = await apiGetCategories();

    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_CATEGORIES,
        categories: response.data.data,
      });
    } else {
      dispatch({
        type: actionType.GET_CATEGORIES,
        message: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_CATEGORIES,
      categories: null,
    });
  }
};
