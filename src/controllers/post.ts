import { Request, Response } from "express";
import Post, { IPost } from "../models/post";

class PostControlllers {
  /*public index(req: Request, res: Response) {
    res.send("This is post");
  }*/
  public async readPosts(req: Request, res: Response) {
    const posts = await Post.find({});
    res.json({ message: "all posts", posts });
  }
  public async addPost(req: Request, res: Response) {
    const { title, url, content } = req.body;
    const nPost = new Post(req.body);
    await nPost.save();
    res.json({ message: "post registered", nPost });
    res.status(101).end();
  }
  public async updatePost(req: Request, res: Response) {
    const { id } = req.params;
    const { title, url, content, image, createdAt, updatedAt } = req.body;
    const ePost = await Post.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated post" });
  }
  public async deletePost(req: Request, res: Response) {
    const { id } = req.params;
    const dPost = await Post.findByIdAndDelete(id);
    res.json({ message: "post deleted" });
  }
}
export const postControlllers = new PostControlllers();
