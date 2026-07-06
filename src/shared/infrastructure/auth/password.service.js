import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

class PasswordService {
  async hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
  };

  async comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

const passwordService = new PasswordService()

export default passwordService;

// export const hashPassword = async (password) => {
//   return bcrypt.hash(password, SALT_ROUNDS);
// };

// export const comparePassword = async (
//   password,
//   hashedPassword,
// ) => {
//   return bcrypt.compare(password, hashedPassword);
// };