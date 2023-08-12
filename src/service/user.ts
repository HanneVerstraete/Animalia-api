import userRepository from '../repository/user';
import ServiceError from '../core/serviceError';

const getAll = async () => {
	const data = await userRepository.findAll();
	return data;
};

const getById = async (id: string) => {
	const user = await userRepository.findById(id);

	if (!user) {
		throw ServiceError.notFound(`No user with id ${id} exists`);
	}

	return user;
};

const getByEmail = async (email: string) => {
	const user = await userRepository.findByEmail(email);

	if (!user) {
		throw ServiceError.notFound(`No user with email ${email} exists`);
	}

	return user;
};

export default {
	getAll,
	getById,
	getByEmail
};