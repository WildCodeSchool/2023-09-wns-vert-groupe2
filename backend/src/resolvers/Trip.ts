import { Resolver, Mutation, Arg, Query, Ctx } from "type-graphql";
import { Trip } from "../entities/trip";
import { TripInput } from "../inputs/Trip";
import { TripUpdateInput } from "../inputs/TripUpdate";
// import { User } from "../entities/user";
import { UserContext } from "../types/User";

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips(): Promise<Trip[]> {
    try {
      // Ici c pour récupérer tous les voyages depuis la base de données
      return Trip.find();
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
      const trip = Trip.create({
        date: data.date,
        price: data.price,
        status: data.status,
        startLocation: data.startLocation,
        stopLocations: data.stopLocations,
        endLocation: data.endLocation,
        passengers: [],
        driver: ctx.user.id,
      });
      // trip.passengers = await User.findByIds(data.passengers);
      return await trip.save();
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
}
