import { Trip } from "../src/entities/trip"; // trip dans le dossier entities

describe("Trip Entity", () => {
  it("should create a new instance of Trip", () => {
    const trip = new Trip();
    expect(trip).toBeInstanceOf(Trip);
  });
});
