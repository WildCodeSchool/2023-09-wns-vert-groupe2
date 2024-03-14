import { TripUpdateInput } from "../src/inputs/TripUpdate";

describe("TripUpdateInput", () => {
  it("should create a new instance of TripUpdateInput", () => {
    const tripUpdateInput = new TripUpdateInput();
    tripUpdateInput.date = new Date();
    tripUpdateInput.price = 100;
    tripUpdateInput.status = "Active";
    tripUpdateInput.startLocation = "Start";
    tripUpdateInput.stopLocations = "Stop";
    tripUpdateInput.endLocation = "End";

    expect(tripUpdateInput.date).toBeDefined();
    expect(tripUpdateInput.price).toEqual(100);
    expect(tripUpdateInput.status).toEqual("Active");
    expect(tripUpdateInput.startLocation).toEqual("Start");
    expect(tripUpdateInput.stopLocations).toEqual("Stop");
    expect(tripUpdateInput.endLocation).toEqual("End");
  });
});
