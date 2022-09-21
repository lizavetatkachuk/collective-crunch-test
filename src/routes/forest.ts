import { Router, Request, Response } from "express";
import * as forestController from "../controllers/forest";
import {
  ForestAttributes,
  partialInputForestAttributes,
} from "../db/models/Forest";

export const standsRouter = Router();

standsRouter.get("/:stand_id", async (req: Request, res: Response) => {
  const stand_id = Number(req.params.stand_id);
  const result = await forestController.getById(stand_id);
  return res.status(200).send(result);
});

standsRouter.put("/:stand_id", async (req: Request, res: Response) => {
  const stand_id = Number(req.params.stand_id);
  const payload: partialInputForestAttributes = req.body;
  const result = await forestController.update(stand_id, payload);
  return res.status(201).send(result);
});

standsRouter.delete("/:stand_id", async (req: Request, res: Response) => {
  const stand_id = Number(req.params.stand_id);
  const result = await forestController.deleteById(stand_id);
  return res.status(204).send({
    success: result,
  });
});

standsRouter.post("/", async (req: Request, res: Response) => {
  const payload: ForestAttributes = req.body;
  const result = await forestController.create(payload);
  return res.status(200).send(result);
});

standsRouter.get("/", async (req: Request, res: Response) => {
  const results = await forestController.getAll();
  return res.status(200).send(results);
});

export default standsRouter;
