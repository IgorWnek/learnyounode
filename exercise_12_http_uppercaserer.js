'use strict'
const http = require('http')
const map = require('through2-map')

const port = Number(process.argv[2])

const server = http.createServer((req, res) => {
    if ('POST' !== req.method) {
        return res.end('Only POST method allowed\n')
    }

    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})
server.listen(port)