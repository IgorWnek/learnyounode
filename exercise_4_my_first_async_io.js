'use strict'
const fs = require('fs')
const file = process.argv[2]

function countNewLinesInFile(error, fileContentsString) {
    if (error) {
        return console.log(error)
    }
    const newLinesNumber = fileContentsString.split('\n').length - 1
    console.log(newLinesNumber)
}

fs.readFile(file, 'utf8', countNewLinesInFile)

