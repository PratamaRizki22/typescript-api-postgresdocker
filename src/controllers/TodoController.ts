import { Request, Response } from "express";
import IControllers from "./ControllerInterface";
import TodoServices from "../services/TodoServices";

class TodoController implements IControllers {
  index = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoServices = new TodoServices(req);
    const todos = await services.getAll();

    return res.send({
      data: todos,
      message: "",
    });
  };
  create = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoServices = new TodoServices(req);
    const todos = await services.store();

    return res.send({
      data: todos,
      message: "todo created",
    });
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoServices = new TodoServices(req);
    const todos = await services.getOne();

    return res.send({
      data: todos,
      message: "showing salah satu gg gaming",
    });
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoServices = new TodoServices(req);
    const todos = await services.update();

    return res.send({
      data: todos,
      message: "todo update",
    });
  };
  delete = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoServices = new TodoServices(req);
    const todos = await services.delete();

    return res.send({
      data: todos,
      message: "todo deleted",
    });
  };
}
export default new TodoController();
