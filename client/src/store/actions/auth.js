import { apiRegister } from "../../services/auth";
import actionType from "./actionType";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);

    if (response?.data.error === 0) {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionType.REGISTER_FAIL,
        data: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.REGISTER_FAIL,
      data: null,
    });
  }
};
