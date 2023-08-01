import UserRouter from '@koa/router';
import userService from '../service/user';
import { Context } from 'vm';

const getAllUsers = async (ctx: Context) => {
	ctx.body = await userService.getAll();
};

const getUserById = async (ctx: Context) => {
	ctx.body = await userService.getById(ctx.params.id);
};

export function installUserRouter(app: any) {
	const router = new UserRouter({
		prefix: '/users'
	});

	router.get('/', getAllUsers);
	router.get('/:id', getUserById);

	app.use(router.routes()).use(router.allowedMethods());
}