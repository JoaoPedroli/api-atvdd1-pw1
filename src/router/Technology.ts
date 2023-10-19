import TechnologyController from "../controllers/Technology";
import express from "express";

const technologyRouter = express.Router();

technologyRouter.get("/", TechnologyController.getAll);
technologyRouter.post("/", TechnologyController.create);
technologyRouter.put("/:id", TechnologyController.update);
technologyRouter.delete("/:id", TechnologyController.delete);

export { technologyRouter };
