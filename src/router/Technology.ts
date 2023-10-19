import TechnologyController from "../controllers/Technology";
import express from "express";

const technologyRouter = express.Router();

technologyRouter.get("/", TechnologyController.getAllTechnologiesByUsername);
technologyRouter.post("/", TechnologyController.create);
technologyRouter.put("/:id", TechnologyController.update);
technologyRouter.patch("/:id", TechnologyController.markTechnologyAsStudied);
technologyRouter.delete("/:id", TechnologyController.remove);

export { technologyRouter };
