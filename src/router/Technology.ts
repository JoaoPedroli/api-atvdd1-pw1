import express from "express";
import TechnologyController from "../controllers/Technology";

const technologyRouter = express.Router();

technologyRouter.get("/", TechnologyController.getAllTechnologiesByUsername);
technologyRouter.post("/", TechnologyController.create);
technologyRouter.put("/:id", TechnologyController.update);
technologyRouter.patch("/:id/studied", TechnologyController.markTechnologyAsStudied);
technologyRouter.delete("/:id", TechnologyController.remove);

export { technologyRouter };
