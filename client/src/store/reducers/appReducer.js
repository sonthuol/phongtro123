import actionType from "../actions/actionType";

const initState = {
  message: "",
  categories: [],
  prices: [],
  acreages: [],
  newPosts: [],
  provinces: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        message: action.message || "",
      };
    case actionType.GET_PRICES:
      return {
        ...state,
        prices: action.prices || [],
        message: action.message || "",
      };

    case actionType.GET_ACREAGES:
      return {
        ...state,
        acreages: action.acreages || [],
        message: action.message || "",
      };

    case actionType.GET_NEW_POST:
      return {
        ...state,
        newPosts: action.newPosts || [],
        message: action.message || "",
      };

    case actionType.GET_PROVINCE:
      return {
        ...state,
        provinces: action.provinces || [],
        message: action.message || "",
      };

    default:
      return state;
  }
};

export default appReducer;
