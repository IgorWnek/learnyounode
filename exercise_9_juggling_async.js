'use strict'
const http = require('http')

const urls = []
const responses = []
let responsesCounter = 0;

for (let i=2; i<process.argv.length; i++) {
    urls.push(process.argv[i])
}

function advanceResponsesCounter() {
    ++responsesCounter
}

function showResponses() {
    responses.forEach(data => {
        console.log(data)
    })
}

function getUrlData(url, index) {
    http.get(url, res => {
        let resString = ''
        res.setEncoding('utf8')
        res.on('data', data => {
            resString += data
        })
        res.on('end', () => {
            responses[index] = resString
            advanceResponsesCounter()

            if (urls.length === responsesCounter) {
                showResponses()
            }
        })
        res.on('error', err => {
            console.error(err)
        })
    })
}

urls.forEach((url, index) => {
    getUrlData(url, index)
})