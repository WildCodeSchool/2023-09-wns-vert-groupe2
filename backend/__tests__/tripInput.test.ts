import { TripInput } from "../src/inputs/Trip";

describe("TripInput", () => {
  it("should create a new instance of TripInput", () => {
    const tripInput = new TripInput();
    tripInput.date = new Date();
    tripInput.price = 100;
    tripInput.status = "Active";
    tripInput.startLocation = "Start";
    tripInput.stopLocations = "Stop";
    tripInput.endLocation = "End";

    expect(tripInput.date).toBeDefined();
    expect(tripInput.price).toEqual(100);
    expect(tripInput.status).toEqual("Active");
    expect(tripInput.startLocation).toEqual("Start");
    expect(tripInput.stopLocations).toEqual("Stop");
    expect(tripInput.endLocation).toEqual("End");
  });
});
