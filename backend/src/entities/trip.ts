import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./user";

@ObjectType()
@Entity()
export class Trip extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column({ default: "created" })
  status: string;

  @Field()
  @Column()
  numberOfPassengers: number;

  @Field()
  @Column()
  startLocation: string;

  @Field()
  @Column()
  stopLocations: string;

  @Field()
  @Column()
  endLocation: string;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.trips, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  passengers: User[];

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.tripsAsDriver, {
    onDelete: "CASCADE",
  })
  driver: User;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
