import { User } from 'src/entities/user';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password: string): Promise<string> => {
	try {
		return await argon2.hash(password);
	} catch (error) {
		console.error(error);
		throw new Error('Error hashing password !');
	}
};

export const comparePasswords = async (
	hashedPassword: string,
	password: string
): Promise<boolean> => {
	try {
		return argon2.verify(hashedPassword, password);
	} catch (error) {
		console.error(error);
		throw new Error('Error comparing password !');
	}
};

export const createJwt = (user: User) => {
	const token = jwt.sign(
		{
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		'jwtsecret'
	);

	return token;
};
