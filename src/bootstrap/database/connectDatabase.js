import mongoose from "mongoose";
import databaseConfig from "../../shared/configuration/database.config.js";
import logger from "../../shared/infrastructure/logging/logger.js";
import ErrorCodes from "../../shared/errors/errorCodes.js"

async function connectDatabase() {
  try {
    const connection = await mongoose.connect(databaseConfig.mongoUri);

    logger.info(
      `✓ MongoDB connected: ${connection.connection.name}, host: ${connection.connections[0].host}`,
    );
  } catch (error) {
    logger.error({ code: ErrorCodes.DATABASE_CONNECTION_ERROR, mongoCode: error.codeName, message: error.message });

    process.exit(1);
  }
}

export default connectDatabase;
