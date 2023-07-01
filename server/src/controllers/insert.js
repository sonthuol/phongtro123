import * as insertService from "../services/insert";

export const insert = async (req, res) => {
  try {
    const response = await insertService.insert();
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Fail at auth controller " + error,
    });
  }
};

export const insertPriceAndAcreage = async (req, res) => {
  try {
    const response = await insertService.createPriceAndAcreage();
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Fail at auth controller " + error,
    });
  }
};
