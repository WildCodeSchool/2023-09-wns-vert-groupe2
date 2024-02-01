// import { Driver } from "../entities/driver";
// import { Arg, Mutation, Query, Resolver } from "type-graphql";

// @Resolver()
// export class DriverResolver {
//   @Query(() => [Driver])
//   async allDrivers() {
//     const result = await Driver.find();
//     return result;
//   }

//   @Mutation(() => String)
//   async deleteDriverById(@Arg("id") id: number) {
//     const driverToDelete = await Driver.findOneByOrFail({
//       id: id,
//     });
//     driverToDelete.remove();
//     return "The Driver has been deleted";
//   }
// }
