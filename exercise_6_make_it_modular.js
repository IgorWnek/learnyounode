'use strict'
const myModule = require('./modules/mymodule')
const path = require("path");

const dir = process.argv[2]
const fileExtension = process.argv[3]

function logFileName(err, data) {
    if (err) {
        console.error(err)
    }

    data.forEach(function (file) {
        console.log(file)
    })
}

myModule(dir, fileExtension, logFileName)
