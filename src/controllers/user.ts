import { Request, Response } from "express";
import User, { IUser } from "../models/user";

class UserControlllers {
  /*public index(req: Request, res: Response) {
    res.send("Hola a todos desde discord");
  }*/
  public async readUsers(req: Request, res: Response) {
    const users = await User.find({});
    res.json({ message: "all users", users });
  }
  public async addUser(req: Request, res: Response) {
    const { fullname, username, email, password } = req.body;
    const nUser = new User(req.body);
    await nUser.save();
    res.json({ message: "user registered", nUser });
    res.status(101).end();
  }
  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { fullname, username, email, password } = req.body;
    const eUser = await User.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated user" });
  }
  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const dUser = await User.findByIdAndDelete(id);
    res.json({ message: "user deleted" });
  }
}
export const userControlllers = new UserControlllers();
