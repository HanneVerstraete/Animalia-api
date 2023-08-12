import UserRouter from '@koa/router';
import userService from '../service/user';
import { Context } from 'vm';

const getAllUsers = async (ctx: Context) => {
	ctx.body = await userService.getAll();
};

const getUserById = async (ctx: Context) => {
	ctx.body = await userService.getById(ctx.params.id);
};

const getUserByEmail = async (ctx: Context) => {
	ctx.body = await userService.getByEmail(ctx.params.email);
};

export function installUserRouter(app: any) {
	const router = new UserRouter({
		prefix: '/users'
	});

	router.get('/', getAllUsers);
	router.get('/:email', getUserByEmail);

	app.use(router.routes()).use(router.allowedMethods());
}