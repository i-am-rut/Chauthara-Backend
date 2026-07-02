import UserModel from "./models/user.model.js";

class UserRepository {
  async create(userData) {
    return UserModel.create(userData);
  }

  async findById(userId) {
    return UserModel.findById(userId);
  }

  async findByEmail(email) {
    return UserModel.findOne({ email });
  }

  async findByUsername(username) {
    return UserModel.findOne({ username });
  }

  async existsByEmail(email) {
    const user = await UserModel.exists({ email });

    return Boolean(user);
  }

  async existsByUsername(username) {
    const user = await UserModel.exists({
      username,
    });

    return Boolean(user);
  }
}

const userRepository = new UserRepository();

export default userRepository;