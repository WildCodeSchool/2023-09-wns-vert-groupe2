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
  stopLocations: string;

  @Field()
  endLocation: string;

  // @Field(() => [String])
  // passengers: string[];

  // @Field()
  // driver: number;
}
