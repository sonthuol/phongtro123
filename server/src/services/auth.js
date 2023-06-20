import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const register = ({ name, phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const [user, created] = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          name,
          phone,
          password: hashPassword(password),
          id: v4(),
        },
      });
      const token =
        created &&
        jwt.sign({ id: user.id, phone: user.phone }, process.env.SECRET_KEY, {
          expiresIn: "2d",
        });

      resolve({
        error: token ? 0 : 2,
        message: token
          ? "User register successfully"
          : "Phone number has been already used",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const login = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { phone },
        raw: true,
      });

      const isCorrectPassword =
        user && bcrypt.compareSync(password, user.password);

      const token =
        isCorrectPassword &&
        jwt.sign({ id: user.id, phone: user.phone }, process.env.SECRET_KEY, {
          expiresIn: "2d",
        });

      resolve({
        error: token ? 0 : 2,
        message: token
          ? "Login is successfully"
          : user
          ? "Password is wrong"
          : "Phone number not found",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
