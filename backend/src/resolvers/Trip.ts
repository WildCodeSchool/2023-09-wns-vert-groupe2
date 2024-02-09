import { Resolver, Mutation, Arg, Query, Ctx } from "type-graphql";
import { Trip } from "../entities/trip";
import { TripInput } from "../inputs/Trip";
import { TripUpdateInput } from "../inputs/TripUpdate";
import { UserContext } from "../types/User";
import { User } from "../entities/user";

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips(): Promise<Trip[]> {
    try {
      // Ici c pour récupérer tous les voyages depuis la base de données
      return Trip.find({ relations: ["passengers"] });
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
      const user = await User.findOne({
        where: {
          id: ctx.user.id,
        },
      });

      if (!user) throw new Error("User not found!");

      const trip = await Trip.save({
        ...data,
        driver: ctx.user.id,
        passengers: [user],
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
    @Arg("id") id: number,
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

  // Ici c pour supprimer un voyage
  @Mutation(() => Boolean)
  async deleteTrip(@Arg("id") id: number): Promise<boolean> {
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
  async getTripsByVoyage(
    @Arg("startLocation") startLocation: string,
    @Arg("endLocation") endLocation: string,
    @Arg("departTime") departTime: Date,
    @Arg("arrivalTime") arrivalTime: Date,
    @Arg("date") date: Date
  ): Promise<Trip[]> {
    try {
      const trips = await Trip.find({
        where: {
          startLocation,
          endLocation,
          departTime,
          arrivalTime,
          date,
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
}
