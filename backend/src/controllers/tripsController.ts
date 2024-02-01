import { Request, Response } from "express";
import { Like } from "typeorm";
import { Trip } from "../entities/trip";
import { validate } from "class-validator";

const tripsController = {
  read: async (req: Request, res: Response) => {
    let result: Trip[] = [];

    try {
      if (req.query.driver !== undefined) {
        result = await Trip.find({
          where: { driver: Like(`%${req.query.driver}%`) },
          relations: {
            driver: true,
          },
        });
      } else if (req.query.driver !== undefined) {
        result = await Trip.find({
          where: { driver: { car: Like(`%${req.query.driver}%`) } },
          relations: {
            driver: true,
          },
        });
      } else {
        console.log("no driver in query");
        result = await Trip.find({
          relations: {
            driver: true,
          },
        });
      }
      res.send(result);
    } catch (err) {
      res.send("There has been an error while reading the trips");
    }
  },
  readOne: async (req: Request, res: Response) => {
    try {
      const result = await Trip.find({
        where: {
          id: Number.parseInt(req.params.id),
        },
        relations: { driver: true },
      });
      if (result.length !== 1) {
        throw new Error(`query error`);
      }
      res.send(result[0]);
    } catch (err) {
      console.log("error", err);
      res.send("an error occured while reading one trip");
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const newTrip = Trip.create(req.body);
      const errors = await validate(newTrip);
      if (errors.length > 0) {
        throw new Error(`Validation failed!`);
      } else {
        await newTrip.save();
      }
      res.send("Trip has been created");
    } catch (err) {
      res.status(400).send("An error occured while creating the trip");
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const tripToDelete = await Trip.findOneByOrFail({
        id: Number.parseInt(req.params.id),
      });
      tripToDelete.remove();
      res.send("The trip has been deleted");
    } catch (err) {
      console.log("error", err);
      res.send("An error occured while deleting the trip");
    }
  },
  put: async (req: Request, res: Response) => {
    try {
      const result = await Trip.find({
        where: {
          id: Number.parseInt(req.body.idToEdit),
        },
        relations: { driver: true },
      });
      console.log("result", result);
      Trip.update({ id: req.body.idToEdit }, req.body.newTrip);
      res.send("The trip has been updated");
    } catch (err) {
      console.log(err);
      res.send("there has been an error while updating the trip");
    }
  },
};

export default tripsController;
