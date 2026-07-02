import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

const UserModel = model("User", userSchema);

export default UserModel;