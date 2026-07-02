import jwt from "jsonwebtoken";
import authConfig from "../../configuration/auth.config.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    authConfig.jwtSecret,
    {
      expiresIn: authConfig.jwtExpiresIn,
    }
  );
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, authConfig.jwtSecret);
};