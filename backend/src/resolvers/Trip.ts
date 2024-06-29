import {
  Resolver,
  Mutation,
  Arg,
  Query,
  Ctx,
  registerEnumType,
} from "type-graphql";
import { Trip } from "../entities/trip";
import { TripInput } from "../inputs/Trip";
import { TripUpdateInput } from "../inputs/TripUpdate";
import { UserContext } from "../types/User";
import { User } from "../entities/user";

import { Between } from "typeorm";

enum SortBy {
  DATE = "DATE",
  PRICE = "PRICE",
}

registerEnumType(SortBy, {
  name: "SortBy",
});

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips(): Promise<Trip[]> {
    try {
      // Ici c pour récupérer tous les voyages depuis la base de données
      return Trip.find({ relations: ["passengers", "driver"] });
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des voyages :",
        error
      );
      throw error;
    }
  }

  // Ici c pour créer un nouveau voyage avec les données fournies.
  @Mutation(() => Trip)
  async createTrip(
    @Arg("data") data: TripInput,
    @Ctx() ctx: UserContext
  ): Promise<Trip> {
    if (!ctx.user) {
      throw new Error("Not authenticated!");
    }
    try {
      const user = await User.findOneOrFail({
        where: {
          id: ctx.user.id,
        },
      });

      const trip = await Trip.save({
        ...data,
        driver: user,
      });

      return trip;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la création du voyage :",
        error
      );
      throw error;
    }
  }

  // Ici c pour mettre à jour un voyage existant
  @Mutation(() => Trip)
  async updateTrip(
    @Arg("id") id: string,
    @Arg("data") data: TripUpdateInput
  ): Promise<Trip | null> {
    try {
      const trip = await Trip.findOne({ where: { id } });

      if (!trip) {
        return null;
      }

      Object.assign(trip, data);

      await trip.save();

      return trip;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la mise à jour du voyage :",
        error
      );
      throw error;
    }
  }

  @Mutation(() => Trip)
  async addAPassanger(
    @Arg("id") id: string,
    @Arg("passengerId") passengerId: string,
    @Ctx() ctx: UserContext
  ): Promise<Trip | null> {
    try {
      if (passengerId !== ctx.user.id && ctx?.user.isAdmin === false)
        // Seul un passager s'ajouter à un voyage
        throw Error("Not authorized");
      const trip = await Trip.findOne({
        where: { id },
        relations: ["passengers"],
      });
      if (!trip) throw Error("Trip not found");

      const existingPassenger = trip.passengers.find(
        (passenger) => passenger.id === passengerId
      );
      if (existingPassenger) {
        throw new Error("Passenger is already added to this trip");
      }
      const passenger = await User.findOne({ where: { id: passengerId } });
      if (!passenger) throw Error("User not found");
      if (
        trip.passengers.length === trip.numberOfPassangers ||
        trip.status === "fulled"
      )
        throw Error("No place available for this trip");
      trip.passengers.push(passenger);
      trip.status = "fulled";
      await trip.save();
      return trip;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'ajout d'un passager :",
        error
      );
      throw error;
    }
  }
  @Mutation(() => Trip)
  async removeAPassanger(
    @Arg("id") id: string,
    @Arg("passengerId") passengerId: string,
    @Ctx() ctx: UserContext
  ): Promise<Trip | null> {
    try {
      const trip = await Trip.findOne({
        where: { id },
        relations: ["passengers"],
      });
      if (!trip) throw Error("Trip not found");
      if (
        (passengerId !== ctx.user.id && ctx?.user.isAdmin === false) ||
        (trip.driver.id !== ctx.user.id && ctx?.user.isAdmin === false)
      )
        throw Error("Not authorized");
      const passenger = await User.findOne({ where: { id: passengerId } });
      if (!passenger) throw Error("User not found");
      if (trip.passengers.length === 0)
        throw Error("No passenger in this trip");

      const passengerIndex = trip.passengers.findIndex(
        (passenger) => passenger.id === passengerId
      );
      if (passengerIndex === -1) {
        throw new Error("Passenger is not part of this trip");
      }

      trip.passengers.splice(passengerIndex, 1);
      trip.status = "created";

      await trip.save();
      return trip;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression d'un passager :",
        error
      );
      throw error;
    }
  }
  // Ici c pour supprimer un voyage
  @Mutation(() => Boolean)
  async deleteTrip(@Arg("id") id: string): Promise<boolean> {
    try {
      const trip = await Trip.findOne({ where: { id } });
      if (!trip) return false;

      await trip.remove();
      return true;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression du voyage :",
        error
      );
      throw error;
    }
  }

  @Query(() => [Trip])
  async getTripsByDateAndLocations(
    @Arg("date") date: Date,
    @Arg("startLocation") startLocation: string,
    @Arg("endLocation") endLocation: string
  ): Promise<Trip[]> {
    try {
      const trips = await Trip.find({
        where: {
          date,
          startLocation,
          endLocation,
        },
      });
      return trips;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des voyages :",
        error
      );
      throw error;
    }
  }
  @Query(() => Trip)
  async getTripById(@Arg("id") id: string): Promise<Trip> {
    try {
      const trip = await Trip.findOne({
        where: { id },
        relations: ["passengers", "driver"],
      });
      if (!trip) throw Error("Trip not found");
      return trip;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des voyages :",
        error
      );
      throw error;
    }
  }

  @Query(() => [Trip])
  async searchTrips(
    @Arg("startLocation") startLocation: string,
    @Arg("endLocation") endLocation: string,
    @Arg("date", { nullable: true }) date: Date,
    @Arg("sortBy", () => [SortBy], { nullable: true }) sortBy: SortBy[]
  ): Promise<Trip[]> {
    try {
      const whereClause: any = {
        startLocation,
        endLocation,
      };

      if (date) {
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 1);

        whereClause.date = Between(startDate, endDate);
      }

      const options: any = { where: whereClause };

      if (sortBy && sortBy.length > 0) {
        options.order = {};
        sortBy.forEach((sortCriterion) => {
          if (sortCriterion === SortBy.DATE) {
            options.order.date = "ASC";
          } else if (sortCriterion === SortBy.PRICE) {
            options.order.price = "ASC";
          }
        });
      }

      console.log("=== OPTIONS ===", options);
      console.log("=== SORT BY ===", sortBy);

      const trips = await Trip.find(options);
      return trips;
    } catch (error) {
      console.error("Error occurred while fetching trips:", error);
      throw new Error("Could not fetch trips. Please try again later.");
    }
  }
}
