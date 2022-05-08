'use strict'
const http = require('http')

const url = process.argv[2]

http.get(url, function (response) {
    let responseString = ''

    response.setEncoding('utf8')
    response.on('data', function (data) {
        responseString += data
    })
    response.on('end', function () {
        console.log(responseString.length)
        console.log(responseString)
    })
    response.on('error', function (err) {
        console.error(err)
    })
})