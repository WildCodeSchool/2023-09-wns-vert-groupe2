// import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { Trip } from "./trip";
// import { Field, ObjectType } from "type-graphql";

// @ObjectType()
// @Entity()
// export class Driver extends BaseEntity {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Field()
//   @Column()
//   car: string;

//   @Field()
//   @Column()
//   licenceNumber: number;

//   @OneToMany(() => Trip, (trip) => trip.driver)
//   ads: Trip[];
// }
