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

server.register({
	register: require('inert')
}, (err) => {
	if (err) {
		console.log(err);
	}

server.route({
	method: 'GET',
	path: '/notes.txt',
	handler: (req, reply) => {
		reply.file('notes.txt')
	}
})

server.route({
	method: 'GET',
	path: '/js/{file*}',
	handler: {
		directory: {
			path: './',
			listing: true
		}
	}
})

})
server.start(function (err) {
	if (err)
		throw err
	console.log('server started');
})