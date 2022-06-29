const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
})

server.route([
	{
		method: 'GET',
		path: '/',
		config: {
			response: {
				emptyStatusCode: 204,
			},
			handler: function (request, reply) {
				reply();
			}
		}
	},
	{
		method: 'GET',
		path: '/shop/{id}',
		handler: function (request, reply) {
			reply('you requested for ' + request.params.id)
		}
	}
])

server.start((err) => {
	if(err)
		throw err;
	console.log('server running');
})
