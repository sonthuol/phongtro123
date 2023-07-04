import * as postService from "../services/post";

export const getPosts = async (req, res) => {
  try {
    const response = await postService.getPosts();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get posts",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Error at get posts controller",
    });
  }
};

export const getPostsWithPagination = async (req, res) => {
  const { page, ...query } = req.query;
  try {
    const response = await postService.getPostsWithPagination(page, query);
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get posts",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Error at get posts controller",
    });
  }
};

export const getNewPosts = async (req, res) => {
  try {
    const response = await postService.getNewPosts();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get new posts",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Error at get new posts controller",
    });
  }
};
