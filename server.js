const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
})

// add routes to accept requests

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply('hello');
}})

server.start(function (err) {
	if(err) 
		throw err
	console.log('server started');
});
