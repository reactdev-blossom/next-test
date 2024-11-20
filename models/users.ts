import mongoose from "mongoose";

const sampleDb = mongoose.connection.useDb("sample_mflix");

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  gender: { type: String },
  dob: { type: String },
  password: { type: String },
});

const Users = sampleDb.model("user", UserSchema, "users");

export default Users;
