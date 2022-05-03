'use strict'
const fs = require('fs')
const dir = process.argv[2]
const fileExtension = process.argv[3]

function printFilesList(error, filesList) {
    if (error) {
        console.error(error)
        return
    }

    let filteredFilesList = fileExtension ? filesList.filter(filterFilesByExtension) : filesList

    for (let i=0; i < filteredFilesList.length ; i++) {
        console.log(filteredFilesList[i])
    }
}

function filterFilesByExtension(fileName) {
    const regex = new RegExp('(.' + fileExtension + ')$', 'g')
    const matchArr = fileName.match(regex)

    if (null === matchArr) {
        return false;
    }

    return matchArr.length === 1
}

fs.readdir(dir, printFilesList)