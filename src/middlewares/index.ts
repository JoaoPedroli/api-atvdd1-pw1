import { Request, Response, NextFunction } from "express";
import User from "../model/User";

export const checkExistsUserAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = req.header("username") ?? "";
    if (User.exists(username)) {
      next();
    } else {
      res.status(404).send(`O username ${username} não foi encontrado`);
    }
  } catch (err) {
    console.error(err);
  }
};

