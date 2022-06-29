const Hapi = require('hapi')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply(123);
    }
})

server.start().then(() => console.log('runnihng server')).catch(err => console.log(err))