import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./user";

@ObjectType()
@Entity()
export class Trip extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  date: Date;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @Column()
  startLocation: string;

  @Field()
  @Column()
  stopLocations: string;

  @Field()
  @Column()
  endLocation: string;

  @Field()
  @Column()
  passengers: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.trips, {
    onDelete: "CASCADE",
  })
  driver: User;
}
