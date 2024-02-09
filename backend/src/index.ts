import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dataSource from '../config/db';
import { UserResolver } from './resolvers/User';
import { ReviewResolver } from './resolvers/Review';
import { UserAdminResolver } from './resolvers/UserAdmin';
import jwt from 'jsonwebtoken';

const start = async () => {
	await dataSource.initialize();

	const schema = await buildSchema({
		resolvers: [UserResolver, ReviewResolver, UserAdminResolver],
	});

	const server = new ApolloServer({
		schema,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
		context: async ({ req }) => {
			let user = null;

			const authorization = req.headers.authorization;

			if (authorization) {
				const token = authorization.replace('Bearer ', '');

				try {
					user = jwt.verify(token, 'jwtsecret');
				} catch (error) {
					console.error('Invalid token', error);
				}
			}

			return { user };
		},
	});

	console.log(`🚀  Server ready at: ${url}`);
};

start();
