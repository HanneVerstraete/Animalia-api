import { getKnex, tables } from '../data';

const findAll = () => {
	return getKnex()(tables.lesson)
		.select()
		.orderBy('index', 'ASC');
};

const findByIndex = (index: number) => {
	return getKnex()(tables.lesson)
		.select()
		.where('index', index)
		.first();
};

export default {findAll, findByIndex};