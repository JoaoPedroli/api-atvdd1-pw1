import { Request, Response } from "express";
import User from "../../model/User";
import { UserPostTypes } from "../../model/User/types.user";

class UserController {
	public async create(req: Request, res: Response) {
		try {
			const userData = req.body as UserPostTypes;

			if (!userData.name?.length || !userData.username?.length) {
				return res
					.status(400)
					.json({ error: "Alguns campos estão faltando! " });
			}

			if (User.exists(userData.username)) {
				res.status(400).json({
					error: "Este username já está em uso.",
				});
			} else {
				const userDataDTO = User.add(userData);
				res.status(201).json(userDataDTO);
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor." });
		}
	}

	public async getAll(req: Request, res: Response) {
		try {
			const allUsers = User.getAll();
			res.status(200).json(allUsers);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor." });
		}
	}
}

export default new UserController();
