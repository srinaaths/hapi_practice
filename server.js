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
		handler: function (request, reply) {
			reply('hey there')
		},
		config: {

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