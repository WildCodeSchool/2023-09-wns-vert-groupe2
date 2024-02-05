import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Trip } from "../entities/trip";
import { TripInput } from "../inputs/Trip";
import { TripUpdateInput } from "../inputs/TripUpdate";
import { User } from "../entities/user";

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async trips(): Promise<Trip[]> {
    // Ici c pour récupérer tous les voyages depuis la base de données
    return Trip.find();
  }

  // Ici c pour créer un nouveau voyage avec les données fournies.
  @Mutation(() => Trip)
  async createTrip(@Arg("data") data: TripInput): Promise<Trip> {
    const trip = Trip.create({
      date: data.date,
      price: data.price,
      status: data.status,
      startLocation: data.startLocation,
      stopLocations: data.stopLocations,
      endLocation: data.endLocation,
      passengers: [],
    });
    trip.passengers = await User.findByIds(data.passengers);
    return await trip.save();
  }

  // Ici c pour mettre à jour un voyage existant
  @Mutation(() => Trip)
  async updateTrip(
    @Arg("id") id: number,
    @Arg("data") data: TripUpdateInput
  ): Promise<Trip | null> {
    const trip = await Trip.findOne({ where: { id } });

    if (!trip) {
      return null;
    }

    Object.assign(trip, data);

    await trip.save();

    return trip;
  }

  // Ici c pour supprimer un voyage
  @Mutation(() => Boolean)
  async deleteTrip(@Arg("id") id: number): Promise<boolean> {
    const trip = await Trip.findOne({ where: { id } });
    if (!trip) return false;

    await trip.remove();
    return true;
  }
}
