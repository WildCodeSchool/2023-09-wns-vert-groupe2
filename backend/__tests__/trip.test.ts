import { Trip } from "../src/entities/trip";

describe("Trip Entity", () => {
  it("should create a new instance of Trip", () => {
    const trip = new Trip();
    expect(trip).toBeInstanceOf(Trip);
  });
});
