export default {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Animalia API',
			version: '0.1.0',
			description:
				'This is a simple CRUD API application made with Koa',
			license: {
				name: 'MIT',
				url: 'https://spdx.org/licenses/MIT.html'
			},
			contact: {
				name: 'AnimaliaAPI',
				url: 'https://hogent.be',
				email: 'hanne.verstraete@student.hogent.be'
			}
		},
		servers: [{
			url: 'http://localhost:9000/'
		}]
	},
	apis: ['./src/rest/*.ts']
};