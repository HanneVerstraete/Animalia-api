import quizElementRepository from '../repository/quizElement';
import ServiceError from '../core/serviceError';

const getAll = async () => {
	const data = await quizElementRepository.findAll();
	return Promise.resolve({ 
		data: data, 
		count: data.length
	});
};

const getByIndex = async (index: number) => {
	const quizElement = await quizElementRepository.findByIndex(index);

	if (!quizElement) {
		throw ServiceError.notFound(`There is no quiz element with index ${index}`, index);
	}

	return quizElement;
};

export default {
	getAll,
	getByIndex
};