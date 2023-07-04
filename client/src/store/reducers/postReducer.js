import actionType from "../actions/actionType";

const initState = {
  posts: [],
  allPosts: [],
  message: "",
  count: 0,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_POSTS:
      return {
        ...state,
        allPosts: action.allPosts || [],
        message: action.message || "",
      };

    case actionType.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        message: action.message || "",
        count: action.count || 0,
      };

    default:
      return state;
  }
};

export default postReducer;
