import { tables, getKnex } from '../data';

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

export default {
	findAll,
	findById,
	findByEmail
};