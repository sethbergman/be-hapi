'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: 5000
})

let goodOptions = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: ['error'], response: '*' }
  }]
}

server.register({
  register: require('good'),
  options: goodOptions
}, err => {

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      server.log('error', 'Oh no!')
      server.log('info', 'replying')
      reply('hello hapi')
    }
  })

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
      reply(`hello ${request.params.name}`)
    }
  })


function handler(request, reply) {
  reply(request.params)
}

  server.route({
    method: 'GET',
    path: '/{stuff*}',
    handler: handler
})

  server.route({
    method: 'GET',
    path: '/users/{userId?}',
    handler: handler
})

  server.route({
    method: 'GET',
    path: '/files/{file*2}',
    handler: handler
})

  server.start(() => console.log(`Started at: ${server.info.uri}`))

})