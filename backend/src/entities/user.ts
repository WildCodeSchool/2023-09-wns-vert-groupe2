import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export type UserRoleType = "admin" | "user";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  hashedPassword: string;

  @Field()
  @Column({ unique: true })
  RIB: string;

  @Field()
  @Column()
  paymentHistory: string;

  @Field()
  @Column()
  birthDate: string;

  @Field()
  @Column()
  trips: string;

  @Field()
  @Column()
  contactInfo: string;

  @Column({
    type: "enum",
    enum: ["admin", "user"],
    default: "user",
  })
  role: UserRoleType;
}
