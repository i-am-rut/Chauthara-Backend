import bcrypt from "bcrypt";
import createInfrastructureError from "../../errors/factories/createInfrastructureError.js";
import authInfrastructureErrors from "../../errors/infrastructure/auth.errors.js";

const SALT_ROUNDS = 10;

class PasswordService {
  async hashPassword(password) {
    try {
      return await bcrypt.hash(password, SALT_ROUNDS);
    } catch (err) {
      throw createInfrastructureError(authInfrastructureErrors.passwordHashFailed, err);
    }
  };

  async comparePassword(password, hashedPassword) {
    try {
      const result = await bcrypt.compare(password, hashedPassword);
      return result;
    } catch (err) {
      throw createInfrastructureError(authInfrastructureErrors.passwordCompareFailed, err)
    }
  }
}

const passwordService = new PasswordService()

export default passwordService;