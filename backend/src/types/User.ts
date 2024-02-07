import { User } from '../entities/user';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthenticatedUser {
	@Field(() => User)
	user: User;

	@Field()
	token: String;
}

@ObjectType()
export class UserContext {
	@Field(() => User)
	user: {
		id: number;
		email: string;
		isAdmin: boolean;
		iat: number;
	};
}
