import UserModel from "./models/user.model.js";

import createInfrastructureError from "../../../shared/errors/factories/createInfrastructureError.js";
import databaseErrors from "../../../shared/errors/infrastructure/database.errors.js";

class UserRepository {
  async create(userData) {
    try {
      return await UserModel.create(userData);
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseWriteError, err)
    }
  }

  async findById(userId) {
    try {
      return await UserModel.findById(userId);
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseReadError, err)
    }
  }

  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseReadError, err)
    }
  }

  async findByUsername(username) {
    try {
      return await UserModel.findOne({ username });
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseReadError, err)
    }
  }

  async existsByEmail(email) {
    try {
      const user = await UserModel.exists({ email });

      return Boolean(user);
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseReadError, err)
    }
  }

  async existsByUsername(username) {
    try {
      const user = await UserModel.exists({
        username,
      });

      return Boolean(user);
    } catch (err) {
      throw createInfrastructureError(databaseErrors.databaseReadError, err)
    }
  }
}

const userRepository = new UserRepository();

export default userRepository;