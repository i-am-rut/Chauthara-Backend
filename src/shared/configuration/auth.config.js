const authConfig = {
  AccessTokenJwtSecret: process.env.ACCESS_TOKEN_JWT_SECRET,
  AccessTokenJwtExpiresIn: process.env.ACCESS_TOKEN_JWT_EXPIRES_IN || "15m",
  RefreshTokenJwtSecret: process.env.REFRESH_TOKEN_JWT_SECRET,
  RefreshTokenJwtExpiresIn: process.env.REFRESH_TOKEN_JWT_EXPIRES_IN || "7d",
};

export default authConfig;
