import { Field, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { Trip } from './trip';
import { Review } from './review';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Field()
	@Column()
	firstname: string;

	@Field()
	@Column()
	lastname: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	pictureUrl: string;

	@Field()
	@Column()
	birthdate: Date;

	@Field()
	@Column()
	phoneNumber: string;

	@Field()
	@Column({
		default: false,
	})
	isAdmin: boolean;

	@Field(() => [Trip])
	@ManyToMany(() => Trip, (trip) => trip.passengers, { onDelete: 'CASCADE' })
	trips: Trip[];

	@Field(() => [Review])
	@OneToMany(() => Review, (review) => review.user, {
		onDelete: 'CASCADE',
	})
	reviews: Review[];

	@CreateDateColumn()
	@Field()
	createdAt: Date;

	@UpdateDateColumn()
	@Field()
	updatedAt: Date;
}
