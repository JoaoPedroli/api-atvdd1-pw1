import { Request, Response } from "express";
import User from "../../model/User";
import Technologies from "../../model/Technologies";

class TechnologyController {
  public async getAllTechnologiesByUsername(req: Request, res: Response) {
    try {
        const username = req.header("username") ?? "";
        const allTechnologiesData = Technologies.getByUser(username);
        res.status(200).json(allTechnologiesData);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor." });
    }
  }

  public async create(req: Request, res: Response) {
    try {
        const username = req.header("username") ?? "";
        const technologyData = req.body;
        const userTechnologyDataDTO = Technologies.add(username, technologyData);
        res.status(201).json(userTechnologyDataDTO);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor." });
    }
  }

  public async update(req: Request, res: Response) {
    try {
        const username = req.header("username") ?? "";
        const { id } = req.params;
        const newTechnologyData = req.body;
        if(Technologies.exists(username, id)) {
            const technologyDTO = Technologies.setTechnology(username, id, newTechnologyData);
            res.status(200).json(technologyDTO);
        } else {
            res.status(404).json({ error: "Esta tecnologia não existe." });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor. "});
    }
  }

  public async markTechnologyAsStudied(req: Request, res: Response) {
    try {
        const username = req.header("username") ?? "";
        const { id } = req.params;
        if(Technologies.exists(username, id)) {
            const technologyDTO = Technologies.markAsStudied(username, id);
            res.status(200).json(technologyDTO);
        } else {
            res.status(404).json({ error: "Esta tecnologia não existe." });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor. "});
    }
  }

  public async remove(req: Request, res: Response) {
    try {
        const username = req.header("useraname") ?? "";
        const { id } = req.params;
        if(Technologies.exists(username, id)) {
            const remainingTechnologies = Technologies.delete(username, id);
            res.status(200).json(remainingTechnologies);
        } else {
            res.status(404).json({ error: "Esta tecnologia não existe." });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor. "});
    }
  }
}

export default new TechnologyController();
