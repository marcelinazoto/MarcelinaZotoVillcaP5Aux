import express from "express";
import morgan from "morgan";

class Application {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
  }
  settings() {
    this.app.set("port", process.env.PORT || 8000);
  }
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`server running on port ${this.app.get("port")}`);
    });
    this.app.get('/', (_req, res) => {
      res.send('Assignment 5, server running');
    });
  }
 
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

export default Application;
