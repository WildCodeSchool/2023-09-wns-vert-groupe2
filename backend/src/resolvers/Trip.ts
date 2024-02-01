import { Like } from "typeorm";
import { Trip } from "../entities/trip";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { TripInput } from "../inputs/Trip";
import { TripUpdateInput } from "../inputs/TripUpdate";

@Resolver()
export class TripResolver {
  @Query(() => [Trip])
  async getAllTrips(@Arg("driver", { nullable: true }) driver?: string) {
    if (driver) {
      return await Trip.find({
        where: { driver: { name: Like(`%${driver}%`) } },
        relations: {
          driver: true,
        },
      });
    } else {
      return await Trip.find({ relations: { driver: true } });
    }
  }

  @Authorized()
  @Mutation(() => Trip)
  async createNewTrip(
    @Arg("tripData") tripData: TripInput,
    @Ctx() ctx: { email: string; role: string }
  ) {
    console.log("context", ctx);
    if (tripData) {
      return await Trip.save({
        ...tripData,
        driver: { id: tripData.driver },
      });
    } else {
      return await Trip.save({
        ...tripData,
        owner: ctx.email,
        driver: { id: tripData.driver },
      });
    }
  }

  @Authorized()
  @Mutation(() => Trip)
  async updateTrip(
    @Arg("id") id: number,
    @Arg("tripData") tripData: TripUpdateInput,
    @Ctx() ctx: { email: string; role: string }
  ) {
    const tripToUpdate = await Trip.findOneByOrFail({ id: id });
    if (tripToUpdate.owner !== ctx.email && ctx.role !== "admin") {
      throw new Error("You cannot edit this trip");
    }

    const newTripData: any = { ...tripData };
    if (tripData.driver) {
      newTripData.driver = { id: tripData.driver };
    }

    return await Trip.save({ id, ...newTripData });
  }
}
