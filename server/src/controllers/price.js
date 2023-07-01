import * as priceService from "../services/price";

export const getPrices = async (req, res) => {
  try {
    const response = await priceService.getPrices();
    res.status(200).json({
      error: response ? 0 : 1,
      message: response ? "OK" : "Failed to get prices",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Failed at get prices controller " + error,
    });
  }
};
