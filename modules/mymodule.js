'use strict'
const fs = require('fs')
const path = require('path')

module.exports = printFilesInDirectory

function printFilesInDirectory(dir, ext, callback) {
    function printFilesList(error, files) {
        if (error) {
            return callback(error)
        }

        files = files.filter(function (file) {
            return path.extname(file) === '.' + ext
        })

        callback(null, files)
    }

    fs.readdir(dir, printFilesList)
}
