import { Request, Response } from "express";
import { Driver } from "../entities/driver";

const driverController = {
  read: async (_req: Request, res: Response) => {
    try {
      const result = await Driver.find();
      res.send(result);
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      await Driver.save(req.body);
      res.send("Driver has been created");
    } catch (err) {
      console.log("err", err);
      res.send("Error");
    }
  },
  edit: async (req: Request, res: Response) => {
    try {
      await Driver.update({ id: req.body.id }, { ...req.body.newDriver });
      res.send("Driver has been updated");
    } catch (err) {
      console.log("err", err);
      res.status(400).send("An error has occured while updating the driver");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const driverToDelete = await Driver.findOneByOrFail({
        id: req.body.id,
      });
      driverToDelete.remove();
      res.send("The trip has been deleted");
    } catch (err) {
      console.log("error", err);
      res.send("An error occured while deleting the trip");
    }
  },
};

export default driverController;
