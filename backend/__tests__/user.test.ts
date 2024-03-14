import { buildSchemaSync } from 'type-graphql';
import { UserAdminResolver } from '../src/resolvers/UserAdmin';
import { UserResolver } from '../src/resolvers/User';
import { ApolloServer } from '@apollo/server';
import { User } from '../src/entities/user';
import { addMocksToSchema } from '@graphql-tools/mock';
import assert from 'assert';

export const LIST_USERS = `#graphql
  query Users {
    users {
      id
      email
      firstname
      lastname
      description
      pictureUrl
      phoneNumber
      isAdmin
    }
  }
`;

export const LIST_USERS_WITH_ID = `#graphql
  query Users {
    users {
      id
    }
  }
`;

export const GET_USER_BY_ID = `#graphql
	query GetUser($getUserByIdId: Float!) {
		getUserById(id: $getUserByIdId) {
			id
			email
			firstname
      lastname
      description
      pictureUrl
      phoneNumber
      isAdmin
		}
	}
`;

type ResponseData = {
	users: User[];
};

type ResponseOneUserData = {
	getUserById: User;
};

const usersData: Partial<User>[] = [
	{
		id: 1,
		email: 'brian@example.com',
		firstname: 'Brian',
		lastname: 'Thellier',
		description: 'Ceci est une description',
		pictureUrl: 'http://',
		phoneNumber: '0600000000',
		isAdmin: true,
	},
	{
		id: 2,
		email: 'pasbrian@example.com',
		firstname: 'pasBrian',
		lastname: 'pasThellier',
		description: 'pasCeci est une description',
		pictureUrl: 'pashttp://',
		phoneNumber: 'pas0600000000',
		isAdmin: true,
	},
];

let server: ApolloServer;

const baseSchema = buildSchemaSync({
	resolvers: [UserAdminResolver, UserResolver],
});

beforeAll(async () => {
	const mocks = {
		Query: {
			users() {
				return usersData;
			},
		},
	};

	const resolvers = () => ({
		Query: {
			getUserById(_: any, args: { id: number }) {
				return usersData.find((b) => b.id == args.id);
			},
		},
	});

	server = new ApolloServer({
		schema: addMocksToSchema({
			schema: baseSchema,
			mocks,
			resolvers: resolvers as unknown as ReturnType<typeof resolvers> &
				typeof mocks,
		}),
	});
});

describe('🍕 - 1. Test sur les utilisateurs', () => {
	it("Retourner une liste d'utilisateurs", async () => {
		// const mockUser = {
		// 	id: 1,
		// 	email: 'test@test.com',
		// 	isAdmin: true,
		// };

		const response = await server.executeOperation<ResponseData>(
			{
				query: LIST_USERS,
			}
			// {
			// 	contextValue: { user: mockUser },
			// }
		);

		assert(response.body.kind === 'single');
		expect(response.body.singleResult.data).toEqual({
			users: usersData,
		});
	});

	it('Retourner les ids des utilisateurs', async () => {
		const response = await server.executeOperation<ResponseData>({
			query: LIST_USERS_WITH_ID,
		});

		assert(response.body.kind === 'single');
		expect(response.body.singleResult.data).toEqual({
			users: usersData.map((user) => ({ id: user.id })),
		});
	});

	it("Récupération d'un utilisateur à partir de son id", async () => {
		const response = await server.executeOperation<ResponseOneUserData>({
			query: GET_USER_BY_ID,
			variables: {
				getUserByIdId: 1,
			},
		});

		// console.log('RESPONSE', JSON.stringify(response));

		assert(response.body.kind === 'single');
		expect(response.body.singleResult.data).toEqual({
			getUserById: usersData[0],
		});
	});
});
