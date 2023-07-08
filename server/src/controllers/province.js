import * as provinceService from "../services/province";

export const getProvinces = async (req, res) => {
  try {
    const response = await provinceService.getProvinces();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get province",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Failed at get province controller " + error,
    });
  }
};
