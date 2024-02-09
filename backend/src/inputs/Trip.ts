import { Field, InputType } from "type-graphql";

@InputType()
export class TripInput {
  @Field()
  date: Date;

  @Field()
  price: number;

  @Field()
  status: string;

  @Field()
  startLocation: string;

  @Field()
  departTime: Date;

  @Field()
  stopLocations: string;

  @Field()
  endLocation: string;

  @Field()
  arrivalTime: Date;

  // @Field(() => [String])
  // passengers: string[];

  // @Field()
  // driver: number;
}
