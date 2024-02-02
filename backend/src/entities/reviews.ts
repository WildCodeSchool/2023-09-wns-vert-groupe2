// src/entities/Review.ts
import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Review extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  rate: number;

  @Field()
  @Column()
  comment: string;

  @Field()
  @Column()
  type: string;
}
