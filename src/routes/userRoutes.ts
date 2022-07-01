import { Router, Request, Response } from "express";
import BaseRoutes from "./BaseRoutes";
// controller
import UserController from "../controllers/UserController";

// middlewar
import { auth } from "../middleware/AuthMiddleware";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("/get", auth, UserController.index);
    this.router.post("/post", UserController.create);
    this.router.get("/getOne/:id", UserController.show);
    this.router.put("/put/:id", UserController.update);
    this.router.delete("/delete/:id", UserController.delete);
  }
}

export default new UserRoutes().router;
