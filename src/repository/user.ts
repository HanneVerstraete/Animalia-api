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

export default {
	findAll,
	findById
};