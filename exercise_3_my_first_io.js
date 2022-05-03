let fs = require('fs')

const fileBuffer = fs.readFileSync(process.argv[2])
const newLinesNumber = fileBuffer.toString.match(/(\\n)|(\n)/g).length

console.log(newLinesNumber)