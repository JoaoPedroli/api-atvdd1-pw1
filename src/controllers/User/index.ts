import { Request, Response } from "express";
import User from "../../model/User";

class UserController {
	public async getAll(req: Request, res: Response) {
		try {
			const allUsersData = User.getAll();
			res.status(200).json(allUsersData);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor." });
		}
	}

	public async create(req: Request, res: Response) {
		try {
			const userData = req.body;
			if (User.exists(userData.username)) {
				res.status(401).send("Este username já está em uso.");
			} else {
				const userDataDTO = User.add(userData);
				res.status(201).json(userDataDTO);
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor." });
		}
	}

	public async update(req: Request, res: Response) {
		try {
			const { userId } = req.headers;
			const userData = req.body;
			if (User.exists(userData.username)) {
				const userDataDTO = User.setUser(userId, userData);
				res.status(200).json(userDataDTO);
			} else {
				res.status(400).send("Este usuário nao existe.");
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor. " });
		}
	}

	public async delete(req: Request, res: Response) {
		try {
			const { userId } = req.headers;
			User.delete(userId);
			res.status(200).send("Usuário deletado com sucesso.");
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Erro no servidor. " });
		}
	}
}

export default new UserController();
