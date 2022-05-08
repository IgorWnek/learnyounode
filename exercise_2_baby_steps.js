let argumentsCounter = 0

for (let i = 2; i < process.argv.length; i++) {
    argumentsCounter += Number(process.argv[i])
}

console.log(argumentsCounter)