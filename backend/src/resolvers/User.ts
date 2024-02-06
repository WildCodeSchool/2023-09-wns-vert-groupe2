import { User } from '../entities/user';
import { UserRegisterInput, UserLoginInput } from '../inputs/User';
import { AuthenticatedUser, UserContext } from '../types/User';
import { comparePasswords, createJwt, hashPassword } from '../utils/auth';
import { Arg, Ctx, Mutation, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
@Resolver()
export class UserResolver {
	@Mutation(() => AuthenticatedUser)
	async register(@Arg('input') input: UserRegisterInput) {
		try {
			const alreadyExists = await User.findOne({
				where: {
					email: input.email,
				},
			});

			if (alreadyExists) {
				throw new Error('User already exists !');
			}

			const user = await User.save({
				email: input.email,
				password: await hashPassword(input.password),
				firstname: '',
				lastname: '',
				description: '',
				pictureUrl: '',
				birthdate: new Date(),
				phoneNumber: '',
			});

			const token = createJwt(user);

			return { user, token };
		} catch (error) {
			throw new Error('Failed to register: ' + error.message);
		}
	}

	@Mutation(() => AuthenticatedUser)
	async login(@Arg('input') input: UserLoginInput) {
		try {
			const user = await User.findOne({
				where: {
					email: input.email,
				},
			});

			if (!user) {
				throw new Error('User not found!');
			}

			const passwordIsValid = await comparePasswords(
				user.password,
				input.password
			);

			if (!passwordIsValid) {
				throw new Error('Invalid credentials !');
			}

			const token = createJwt(user);

			return { user, token };
		} catch (error) {
			throw new Error('Failed to login: ' + error.message);
		}
	}

	@Query(() => User)
	async me(@Ctx() ctx: UserContext) {
		if (!ctx.user) {
			throw new Error('Not authenticated !');
		}

		try {
			const authenticatedUser = await User.findOne({
				where: {
					id: ctx.user.id,
				},
			});

			return authenticatedUser;
		} catch (error) {
			throw new Error('Failed to fetch my informations: ' + error.message);
		}
	}
}
