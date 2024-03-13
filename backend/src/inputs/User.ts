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

@InputType()
export class UserChangePassword {
	@Field()
	password: string;

	@Field()
	repeatedPassword: string;
}

@InputType()
export class UserUpdateAdmin {
	@Field()
	email: string;

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
