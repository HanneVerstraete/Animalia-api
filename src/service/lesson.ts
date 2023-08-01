import lessonRepository from '../repository/lesson';
import ServiceError from '../core/serviceError';

const getAll = async () => {
	const data = await lessonRepository.findAll();
	return Promise.resolve({ 
		data: data, 
		count: data.length
	});
};

const getByIndex = async (index: number) => {
	const lesson = await lessonRepository.findByIndex(index);

	if (!lesson) {
		throw ServiceError.notFound(`There is no lesson with index ${index}`, index);
	}

	return lesson;
};

export default {
	getAll,
	getByIndex
};