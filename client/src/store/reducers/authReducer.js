import actionType from "../actions/actionType";

const initState = {
  isLoggedIn: false,
  token: null,
  message: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        message: action.data,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
