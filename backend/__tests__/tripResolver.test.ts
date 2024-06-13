import "reflect-metadata";
import { TripResolver } from "../src/resolvers/Trip";
import { TripInput } from "../src/inputs/Trip";
import { UserContext } from "../src/types/User";

describe("TripResolver", () => {
  describe("createTrip", () => {
    it("should create a new trip", async () => {
      const tripResolver = new TripResolver();
      const mockContext: UserContext = {
        user: {
          id: 1,
          email: "example@example.com",
          isAdmin: true,
          iat: 1234567890,
        },
      };

      const tripInput: TripInput = {
        date: new Date(),
        price: 100,
        status: "Active",
        startLocation: "Start",
        stopLocations: "Stop",
        endLocation: "End",
      };

      const createdTrip = await tripResolver.createTrip(tripInput, mockContext);
      expect(createdTrip).toBeDefined();
    });
  });
});
