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
