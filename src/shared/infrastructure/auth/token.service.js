import jwt from "jsonwebtoken";
import config from "../../configuration/index.js";

class TokenService {
  generateAccessToken(payload) {
    return jwt.sign(payload, config.auth.AuthJwtSecret, { expiresIn: config.auth.AccessTokenJwtExpiresIn });
  };

  verifyAccessToken(token) {
    return jwt.verify(token, config.auth.AccessTokenJwtSecret)
  }

  generateRefreshToken(payload) {
    return jwt.sign(payload, config.auth.RefreshTokenJwtSecret, { expiresIn: config.auth.RefreshTokenJwtExpiresIn })
  }
  
  verifyRefreshToken(token) {
    return jwt.verify(token, config.auth.RefreshTokenJwtSecret)
  }
}

const tokenService = new TokenService();

export default tokenService;

// export const generateAccessToken = (payload) => {
//   return jwt.sign(
//     payload,
//     authConfig.AuthJwtSecret,
//     {
//       expiresIn: authConfig.jwtExpiresIn,
//     }
//   );
// };

// export const verifyAccessToken = (token) => {
//   return jwt.verify(token, authConfig.AuthJwtSecret);
// };