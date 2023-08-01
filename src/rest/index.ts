import {installQuizElementRouter} from './_quizElement';
import {installLessonRouter} from './_lesson';
import {installUserRouter} from './_user';
import Router from '@koa/router';

export function installRouter(app: any) {
	const router = new Router({
		prefix: '/api'
	});

	installQuizElementRouter(router);
	installLessonRouter(router);
	installUserRouter(router);

	app.use(router.routes()).use(router.allowedMethods());
}