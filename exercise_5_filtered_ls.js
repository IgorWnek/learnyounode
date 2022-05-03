'use strict'
const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const fileExtension = '.' + process.argv[3]

function printFilesList(error, files) {
    if (error) {
        return console.error(error)
    }

    files.forEach(function (file) {
        if (path.extname(file) === fileExtension) {
            console.log(file)
        }
    })
}

fs.readdir(dir, printFilesList)