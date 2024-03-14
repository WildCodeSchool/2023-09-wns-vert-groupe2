import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
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

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.trips, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  passengers: User[];

  @Field()
  @Column()
  driver: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
