import jwt from "jsonwebtoken";
import config from "../../configuration/index.js";
import createInfrastructureError from "../../errors/factories/createInfrastructureError.js";
import authInfrastructureErrors from "../../errors/infrastructure/auth.errors.js";

class TokenService {
  generateAccessToken(payload) {
    try {
      const accessToken = jwt.sign(payload, config.auth.AccessTokenJwtSecret, { expiresIn: config.auth.AccessTokenJwtExpiresIn });
      return accessToken;
    } catch (error) {
      throw createInfrastructureError(authInfrastructureErrors.accessJwtSignFailure, error);
    }
  };

  verifyAccessToken(token) {
    try {
      const res = jwt.verify(token, config.auth.AccessTokenJwtSecret);
      return res;
    } catch (error) {
      throw createInfrastructureError(authInfrastructureErrors.accessJwtVerifyFailure, error)
    }
  }

  generateRefreshToken(payload) {
    try {
      const refreshToken = jwt.sign(payload, config.auth.RefreshTokenJwtSecret, { expiresIn: config.auth.RefreshTokenJwtExpiresIn });
      return refreshToken;
    } catch (err) {
      throw createInfrastructureError(authInfrastructureErrors.refreshJwtSignFailure, err);
    }
  }

  verifyRefreshToken(token) {
    try {
      const res = jwt.verify(token, config.auth.RefreshTokenJwtSecret);
      return res;
    } catch (err) {
      throw createInfrastructureError(authInfrastructureErrors.refreshJwtVerifyFailure, err)
    }
  }
}

const tokenService = new TokenService();

export default tokenService;