import * as categoryService from "../services/category";

export const getCategories = async (req, res) => {
  try {
    const response = await categoryService.getCategories();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get categories",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Failed at get categories controller " + error,
    });
  }
};
