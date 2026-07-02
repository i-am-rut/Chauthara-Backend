import mongoose from "mongoose";
import databaseConfig from "../../shared/configuration/database.config.js";
import logger from "../../shared/infrastructure/logging/logger.js";

async function connectDatabase() {
  try {
    const connection = await mongoose.connect(databaseConfig.mongoUri);

    logger.info(
      `✓ MongoDB connected: ${connection.connection.name}, host: ${connection.connections[0].host}`,
    );
  } catch (error) {
    logger.error("✕ MongoDB connection failed");
    logger.error(error.message);

    process.exit(1);
  }
}

export default connectDatabase;
