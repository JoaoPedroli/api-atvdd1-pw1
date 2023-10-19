import { Request, Response } from "express";
import User from "../../model/User";
import Technologies from "../../model/Technologies";

class TechnologyController {
  public async getAllTechnologiesByUsername(req: Request, res: Response) {
    try {
        const username = req.header("username");
        if(User.exists(username)) {
            const allTechnologiesData = Technologies.getByUser(username);
            res.status(200).json(allTechnologiesData);
        } else {
            res.status(400).send("Este username nao existe.");
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor." });
    }
  }

  public async create(req: Request, res: Response) {
    try {
        const username = req.header("username");
        const technologyData = req.body;
        if(User.exists(username)) {
            const userTechnologyDataDTO = Technologies.add(username, technologyData);
            res.status(201).json(userTechnologyDataDTO);
        } else {
            res.status(400).send("Este username nao existe.");
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor." });
    }
  }

  public async update(req: Request, res: Response) {
    try {
        const technologyId = req.params.id;
        const technologyData = req.body;
        const technologyDataDTO = Technologies.setTechnology(technologyId, technologyData);
        res.status(200).json(technologyDataDTO);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor. "});
    }
  }

  public async remove(req: Request, res: Response) {
    try {
        const { userId } = req.headers;
        User.delete(userId);
        res.status(200).send("Usuário deletado com sucesso.");
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor. "});
    }
  }
}

export default new TechnologyController();
