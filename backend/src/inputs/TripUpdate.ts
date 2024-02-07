import { Field, InputType } from "type-graphql";

@InputType()
export class TripUpdateInput {
  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  startLocation?: string;

  @Field({ nullable: true })
  stopLocations?: string;

  @Field({ nullable: true })
  endLocation?: string;

  @Field(() => [String], { nullable: true })
  passengers?: string[];

  // @Field({ nullable: true })
  // driver?: number;
}
