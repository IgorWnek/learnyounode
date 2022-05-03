let arguments = process.argv
let argumentsCounter = 0

arguments.map((value, index) => {
    if (index < 2) {
        return;
    }

    argumentsCounter += parseInt(value)
})

console.log(argumentsCounter)