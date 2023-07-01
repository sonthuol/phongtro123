import * as acreageService from "../services/acreage";

export const getAcreages = async (req, res) => {
  try {
    const response = await acreageService.getAcreages();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed at get acreages controller",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Failed at get acreages controller" + error,
    });
  }
};
