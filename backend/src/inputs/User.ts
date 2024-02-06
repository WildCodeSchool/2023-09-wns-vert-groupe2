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
