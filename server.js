const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
})

// add routes to accept requests

server.route({
	method: 'POST',
	path: '/',
	handler: function (request, reply) {
		const payload = request.payload;
		console.log(payload);
		reply(payload);
	}
})

server.start(function (err) {
	if (err)
		throw err
	console.log('server started');
});