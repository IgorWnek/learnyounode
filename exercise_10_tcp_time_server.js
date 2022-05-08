'use strict'
const net = require('net')
const port = process.argv[2]

function fillZero(number) {
    return parseInt(number) < 10 ? '0' + number : number
}

function currentDateString() {
    const date = new Date()

    return date.getFullYear() + '-' +
        fillZero(date.getMonth() + 1) + '-' +
        fillZero(date.getDate()) + ' ' +
        fillZero(date.getHours()) + ':' +
        fillZero(date.getMinutes())
}

const server = net.createServer(socket => {
    socket.write(currentDateString() + '\n')
    socket.end()
})

server.listen(port)