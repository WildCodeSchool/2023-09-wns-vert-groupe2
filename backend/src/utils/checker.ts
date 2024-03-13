import { UserContextV2 } from 'src/types/User';

export const checkIfRegistered = (user: UserContextV2) => {
	if (!user) {
		throw new Error('Not authenticated !');
	}
};

export const checkIfRegisteredOrIsAdmin = (user: UserContextV2) => {
	if (!user) {
		throw new Error('Not authenticated !');
	} else if (!user.isAdmin) {
		throw new Error('Not authorized !');
	}
};
