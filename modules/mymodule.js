'use strict'
const fs = require('fs')
const path = require('path')

module.exports = printFilesInDirectory

function printFilesInDirectory(dir, ext, callback) {
    function printFilesList(error, files) {
        if (error) {
            return callback(error)
        }

        let filteredFiles = []

        files.forEach(function (file) {
            if (path.extname(file) === ('.' + ext)) {
                filteredFiles.push(file)
            }
        })

        callback(null, filteredFiles)
    }

    fs.readdir(dir, printFilesList)
}
