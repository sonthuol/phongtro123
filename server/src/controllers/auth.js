import * as authService from "../services/auth";

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password)
      return res.status(400).json({
        error: 1,
        message: "Missings input !",
      });
    const response = await authService.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: -1,
      message: "Fail at auth controller " + error,
    });
  }
};
