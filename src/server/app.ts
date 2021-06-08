import express from "express";
import morgan from "morgan";
import allRoutes from "../routes";
import userRoutes from "../routes/user";
import postRoutes from "../routes/post";

class Application {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
  }
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`server running on port ${this.app.get("port")}`);
    });
    this.app.get("/", (_req, res) => {
      res.send("Assignment 5, server running");
    });
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    //this.app.use("/api/user", userRoutes);
    //this.app.use("/api/post", postRoutes);
    this.app.use("/api", allRoutes);
  }
}

export default Application;
