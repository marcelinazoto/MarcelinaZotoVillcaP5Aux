import { Schema, Document, model} from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document{
    fullname: string;
    username: string;
    email: string;
    password: string;
    dateReg: Date;
}
const userSchema = new Schema<IUser>({
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, requiered: true, unique: true },
    password: { type: String, required: true },
    dateReg: Date, default
});
export default model<IUser>("User", userSchema);
