import { getChildLogger } from '../core/logging';
import { tables, getKnex } from '../data';
import { User } from '../types/User';

const findAll = () => {
	return getKnex()(tables.user)
		.select()
		.orderBy('id', 'ASC');
};

const findById = (id: string) => {
	return getKnex()(tables.user)
		.where('id', id)
		.first();
};

const findByEmail = (email: string) => {
	return getKnex()(tables.user)
		.where('email', email)
		.first();
};

const updateById = async (userId: string, user: User) => {
	const {id, ...rest} = user;
	try {
		await getKnex()(tables.user)
			.update(rest)
			.where('id', userId);
		return await findById(userId);
	} catch (error) {
		const logger = getChildLogger('users-repo');
		logger.error('Error in updateById', {
			error
		});
		throw error;
	}
};

export default {
	findAll,
	findById,
	findByEmail,
	updateById
};