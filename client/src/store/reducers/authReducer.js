import actionType from "../actions/actionType";

const initState = {
  isLoggedIn: false,
  token: null,
  message: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
        message: "",
      };
    case actionType.REGISTER_FAIL:
    case actionType.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        message: action.data,
        token: null,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        message: "",
      };
    default:
      return state;
  }
};

export default authReducer;
