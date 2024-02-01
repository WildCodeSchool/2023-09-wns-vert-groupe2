import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import { Driver } from "./driver";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Trip extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @Length(3)
  title: string;

  @Field()
  @Column()
  date: number;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  passengers: string;

  @Field()
  @Column()
  driverId: string;

  @Field()
  @Column()
  status: string;

  @Field()
  @Column()
  startLocation: string;

  @Field()
  @Column()
  endLocation: string;

  @Field()
  @Column()
  numberOfSeats: string;

  @Field(() => Driver)
  @ManyToOne(() => Driver, (driver) => driver.trips, {
    onDelete: "?",
  })
  driver: Driver;
}
