import { Request, Response } from "express";
import IControllers from "./ControllerInterface";
  console.log("hello");
  
let data: any[] = [
  { id: 1, name: "adi" },
  { id: 2, name: "idi" },
  { id: 3, name: "odi" },
  { id: 4, name: "udi" },
];
class userController implements IControllers {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send("suceess");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    let person = data.find((item) => (item.id = id));
    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    person.name = name;
    return res.send(person.name);
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    let person = data.filter((item) => item.id != id);
    return res.send(person);
  }
}
export default new userController();
