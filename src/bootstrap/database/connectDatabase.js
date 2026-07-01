import mongoose from "mongoose";
import databaseConfig from "../../shared/configuration/database.config.js";

async function connectDatabase() {
  try {
    const connection = await mongoose.connect(
      databaseConfig.mongoUri
    );

    console.log(
      `✓ MongoDB connected: ${connection.connection.name}, host: ${connection.connections[0].host}`
    );
  } catch (error) {
    console.error("✕ MongoDB connection failed");
    console.error(error.message);

    process.exit(1);
  }
}

export default connectDatabase;