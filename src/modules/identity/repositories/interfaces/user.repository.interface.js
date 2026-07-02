/**
 * User Repository Contract
 *
 * create(userData)
 * findById(userId)
 * findByEmail(email)
 * findByUsername(username)
 * existsByEmail(email)
 * existsByUsername(username)
 */

const userRepositoryInterface = {
  create: "create",
  findById: "findById",
  findByEmail: "findByEmail",
  findByUsername: "findByUsername",
  existsByEmail: "existsByEmail",
  existsByUsername: "existsByUsername",
};

export default userRepositoryInterface;