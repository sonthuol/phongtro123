import { apiGetPosts, apiGetPostsLimit } from "../../services/post";
import actionType from "./actionType";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();

    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_POSTS,
        allPosts: response.data.data,
      });
    } else {
      dispatch({
        type: actionType.GET_POSTS,
        message: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_POSTS,
      allPosts: null,
    });
  }
};

export const getPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);
    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_POSTS_LIMIT,
        posts: response.data.data.rows,
        count: response.data.data.count,
      });
    } else {
      dispatch({
        type: actionType.GET_POSTS_LIMIT,
        message: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};
