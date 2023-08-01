const NOT_FOUND = 'NOT_FOUND';
const VALIDTION_FAILED = 'VALIDATION_FAILED';
const UNAUTHORIZED = 'UNAUTHORIZED';
const FORBIDDEN = 'FORBIDDEN';

class ServiceError extends Error {
	private static _instance: ServiceError;

	code:string;
	details: Record<string, string>;
	name: string;

	constructor(code, message, details = {}) {
		super(message);
		this.code = code;
		this.details = details;
		this.name = 'ServiceError';
	}

	static notFound(message: string, details = {}) {
		return new ServiceError(NOT_FOUND, message, details);
	}

	static validationFailed(message: string, details = {}) {
		return new ServiceError(VALIDTION_FAILED, message, details);
	}

	static unauthorized(message: string, details = {}) {
		return new ServiceError(UNAUTHORIZED, message, details);
	}

	static forbidden(message: string, details = {}) {
		return new ServiceError(FORBIDDEN, message, details);
	}

	get isNotFound() {
		return this.code === NOT_FOUND;
	}

	get isValidationFailed() {
		return this.code === VALIDTION_FAILED;
	}

	get isUnauthorized() {
		return this.code === UNAUTHORIZED;
	}

	get isForbidden() {
		return this.code === FORBIDDEN;
	}
}

export default ServiceError;