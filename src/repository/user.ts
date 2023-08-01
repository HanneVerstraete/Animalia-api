import { tables, getKnex } from '../data';

const findAll = () => {
	return getKnex()(tables.user)
		.select()
		.orderBy('index', 'ASC');
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