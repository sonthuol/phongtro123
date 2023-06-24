import { apiGetPosts } from "../../services/post";
import actionType from "./actionType";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();

    if (response?.data.error === 0) {
      dispatch({
        type: actionType.GET_POSTS,
        posts: response.data.data,
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
      posts: null,
    });
  }
};
