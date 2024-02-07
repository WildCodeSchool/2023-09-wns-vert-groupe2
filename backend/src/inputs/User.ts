import { Field, InputType } from 'type-graphql';

@InputType()
export class UserRegisterInput {
	@Field()
	email: string;

	@Field()
	password: string;
}

@InputType()
export class UserLoginInput {
	@Field()
	email: string;

	@Field()
	password: string;
}

@InputType()
export class UserUpdateMe {
	@Field()
	firstname: string;
	@Field()
	lastname: string;

	@Field()
	description: string;

	@Field()
	pictureUrl: string;

	@Field()
	birthdate: Date;

	@Field()
	phoneNumber: string;
}
