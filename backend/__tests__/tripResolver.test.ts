import { TripResolver } from "../src/resolvers/Trip";
import { TripInput } from "../src/inputs/Trip";

describe("TripResolver", () => {
  describe("createTrip", () => {
    it("should create a new trip", async () => {
      const mockContext = {
        user: {
          id: 1,
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

      const createdTrip = await TripResolver.createTrip(tripInput, mockContext);
      expect(createdTrip).toBeDefined();
    });
  });
});
