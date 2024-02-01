import { Field, InputType } from "type-graphql";

@InputType()
export class TripUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  date?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  passengers?: number;

  @Field({ nullable: true })
  driverId?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  startLocation?: string;

  @Field({ nullable: true })
  endLocation?: string;

  @Field({ nullable: true })
  numberOfSeats?: number;
}
