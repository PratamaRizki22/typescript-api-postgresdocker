import BaseRoutes from "./BaseRoutes";
// controller
import TodoController from "../controllers/TodoController";
import validate from "../middleware/TodoVallidator";
// middlewar
import { auth } from "../middleware/AuthMiddleware";

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("/get", auth, TodoController.index);
    this.router.post("/post", auth, validate, TodoController.create);
    this.router.get("/getOne/:id", auth, TodoController.show);
    this.router.put("/put/:id", auth, validate, TodoController.update);
    this.router.delete("/delete/:id", auth, TodoController.delete);
  }
}

export default new TodoRoutes().router;
