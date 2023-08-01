import lessonService from '../service/lesson';
import LessonRouter from '@koa/router';
import { Context } from 'koa';

const getAllLessons = async (ctx: Context) => {
	ctx.body = await lessonService.getAll();
};

const getLessonByIndex = async (ctx: Context) => {
	ctx.body = await lessonService.getByIndex(ctx.params.index);
};

export function installLessonRouter(app: any) {
	const router = new LessonRouter({
		prefix: '/lessons'
	});

	router.get('/', getAllLessons);
	router.get('/:index', getLessonByIndex);

	app.use(router.routes()).use(router.allowedMethods());
}