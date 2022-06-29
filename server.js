const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 3000
})

// add routes to accept requests

server.register([
	{
		register: require('hapi-geo-locate'),
		options: {
			enabledByDefault: true
		}
	}
], (err) => {
	console.log(err);

server.route({
	method: 'GET',
	path: '/location',
	handler: function (request, reply) {
		reply(request.location)
	}
})

}
)

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