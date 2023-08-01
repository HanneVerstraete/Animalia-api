import quizElementService from '../service/quizElement';
import QuizElementRouter from '@koa/router';
import { Context } from 'koa';

const getAllQuizElements = async (ctx: Context) => {
	ctx.body = await quizElementService.getAll();
};

const getQuizElementByIndex = async (ctx: Context) => {
	ctx.body = await quizElementService.getByIndex(ctx.params.index);
};

export function installQuizElementRouter(app: any) {
	const router = new QuizElementRouter({
		prefix: '/quizElements'
	});

	router.get('/', getAllQuizElements);
	router.get('/:index', getQuizElementByIndex);

	app.use(router.routes()).use(router.allowedMethods());
}