import { Request, Response } from "express";
import Authentification from "../utils/Authentification";
const db = require("../db/models");
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await Authentification.passwordHash(
      password
    );

    await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send("registrasi succes");
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    // cari data user by username
    let { username, password } = req.body;

    const user = await db.user.findOne({
      where: { username },
    });
    // check password
    let compare = await Authentification.passwordCompare(
      password,
      user.password
    );

    // generate token
    if (compare) {
      let tokens = Authentification.generateToken(
        user.id,
        username,
        user.password
      );
      return res.send({
        tokens,
      });
    }
    return res.send("authfailed");
  };
  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credential);
  };
}
export default new AuthController();
