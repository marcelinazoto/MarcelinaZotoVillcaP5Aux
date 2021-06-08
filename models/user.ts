import { SchemaTypes, Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, requiered: true, unique: true },
    password: { type: String, required: true },
    dateReg: Date, default
});
export default model("User", userSchema);
