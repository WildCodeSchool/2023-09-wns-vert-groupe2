import { checkIfRegistered } from '../utils/checker';
import { User } from '../entities/user';
import {
	UserRegisterInput,
	UserLoginInput,
	UserUpdateMe,
	UserChangePassword,
} from '../inputs/User';
import { AuthenticatedUser, UserContext } from '../types/User';
import { comparePasswords, createJwt, hashPassword } from '../utils/auth';
import { Arg, Ctx, Mutation, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
@Resolver()
export class UserResolver {
	@Mutation(() => AuthenticatedUser)
	async register(
		@Arg('input') input: UserRegisterInput
	): Promise<AuthenticatedUser> {
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
	async login(@Arg('input') input: UserLoginInput): Promise<AuthenticatedUser> {
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
	async me(@Ctx() ctx: UserContext): Promise<User> {
		checkIfRegistered(ctx.user);

		try {
			const authenticatedUser = await User.findOne({
				where: {
					id: ctx.user.id,
				},
				relations: ['reviews', 'trips'],
			});

			if (!authenticatedUser) {
				throw new Error('Error fetching user.');
			}

			return authenticatedUser;
		} catch (error) {
			throw new Error('Failed to fetch my informations: ' + error.message);
		}
	}

	@Mutation(() => User)
	async updateMe(
		@Arg('input') input: UserUpdateMe,
		@Ctx() ctx: UserContext
	): Promise<User> {
		checkIfRegistered(ctx.user);

		try {
			const userToUpdate = await User.findOne({
				where: {
					id: ctx.user.id,
				},
			});

			if (!userToUpdate) {
				throw new Error('User not found !');
			}

			const newUser = await User.save({
				...userToUpdate,
				...input,
			});

			return newUser;
		} catch (error) {
			throw new Error('Failed to update me: ' + error.message);
		}
	}

	@Mutation(() => String)
	async deleteMe(@Ctx() ctx: UserContext): Promise<String> {
		checkIfRegistered(ctx.user);

		try {
			await User.delete(ctx.user.id);

			return `User #${ctx.user.id} - ${ctx.user.email} deleted !`;
		} catch (error) {
			throw new Error('Failed to delete me: ' + error.message);
		}
	}

	@Query(() => User)
	async getUserById(@Arg('id') id: number): Promise<User> {
		try {
			const user = await User.findOne({
				where: {
					id,
				},
			});

			if (!user) throw new Error('User not found !');

			return user;
		} catch (error) {
			throw new Error('Failed to fetch user: ' + error.message);
		}
	}

	@Mutation(() => User)
	async changeMyPassword(
		@Arg('input') input: UserChangePassword,
		@Ctx() ctx: UserContext
	): Promise<User> {
		checkIfRegistered(ctx.user);

		try {
			const userToUpdate = await User.findOne({
				where: {
					id: ctx.user.id,
				},
			});

			if (!userToUpdate) {
				throw new Error('User not found !');
			}

			let passwordIsValid = input.password === input.repeatedPassword;

			if (!passwordIsValid) {
				throw new Error('Passwords does not match !');
			}

			const newUser = await User.save({
				...userToUpdate,
				password: await hashPassword(input.password),
			});

			return newUser;
		} catch (error) {
			throw new Error('Failed to change password: ' + error.message);
		}
	}
}
