import { Field, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from './user';

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

	@ManyToOne(() => User, (user) => user.reviews)
	user: User;

	@CreateDateColumn()
	@Field()
	createdAt: Date;

	@UpdateDateColumn()
	@Field()
	updatedAt: Date;
}
