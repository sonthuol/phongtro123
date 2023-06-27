import actionType from "../actions/actionType";

const initState = {
  message: "",
  categories: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        message: action.message || "",
      };

    default:
      return state;
  }
};

export default appReducer;
