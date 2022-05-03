'use strict'
const fs = require('fs')

function countNewLinesInFile(error, fileContentsString) {
    const newLinesNumber = fileContentsString.split('\n').length - 1
    console.log(newLinesNumber)
}

fs.readFile(process.argv[2], 'utf8', countNewLinesInFile)

