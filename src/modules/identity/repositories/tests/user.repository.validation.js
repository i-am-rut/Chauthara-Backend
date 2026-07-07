import "dotenv/config"
import { connectDatabase }
  from "../../../../bootstrap/database/index.js";

// import userRepository
//   from "../user.repository.js";
// import mongoose from "mongoose";

await connectDatabase();

// const createdUser =
//   await userRepository.create({
//     username: "testuser",
//     email: "test@test.com",
//     passwordHash: "hashed-password",
//     name: "Test User",
//   });

// console.log(createdUser);

// const user =
//   await userRepository.findByEmail(
//     "test@test.com"
//   );

// console.log(user);

// const user =
//   await userRepository.findByUsername(
//     "testuser"
//   );

// console.log(user);

// const exists =
//   await userRepository.existsByEmail(
//     "test@test.com"
//   );

// console.log(exists);

// const exists =
//   await userRepository.existsByUsername(
//     "testuser"
//   );

// console.log(exists);

// const user =
//   await userRepository.findByEmail(
//     "missing@test.com"
//   );

// console.log(user);

// await userRepository.create({
//   username: "anotheruser",
//   email: "test@test.com",
//   passwordHash: "hashed-password",
// });

// await userRepository.create({
//   username: "testuser",
//   email: "another@test.com",
//   passwordHash: "hashed-password",
// });

// const indexes = await mongoose.connection.db
//   .collection("users")
//   .indexes();

// console.log(indexes);

process.exit(0);