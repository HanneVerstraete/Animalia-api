import { getKnex, tables } from '../data';

const findAll = () => {
	return getKnex()(tables.quizElement)
		.select()
		.orderBy('index', 'ASC');
};

const findByIndex = (index: number) => {
	return getKnex()(tables.quizElement)
		.select()
		.where('index', index)
		.first();
};

export default {findAll, findByIndex};