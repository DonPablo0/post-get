const Server = require('./modelo/server')
require('dotenv').config()

const server = new Server()
server.listen()