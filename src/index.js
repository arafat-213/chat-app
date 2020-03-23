const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

// Path for the public directory
const publicDirectoryPath = path.join(__dirname, '../public')

// Port number for our app
const port = process.env.PORT || 3000

// Getting instance of express server
const app = express()

// Setting up http express server for socket programming
const server = http.createServer(app)

// Getting instance of socket.io
const io = socketio(server)

// Listening on 'connection' event on socket
io.on('connection', () => {
    console.log('New WebSocket connection');
})

// Setting up static public directory to serve
app.use(express.static(publicDirectoryPath))

server.listen(port, () => {
    console.log('Server is up on port', port);
})