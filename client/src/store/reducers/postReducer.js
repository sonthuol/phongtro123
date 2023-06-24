import actionType from "../actions/actionType";

const initState = {
  posts: [],
  message: "",
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS:
      return {
        ...state,
        posts: action.posts || [],
        message: action.message || "",
      };

    default:
      return state;
  }
};

export default postReducer;
