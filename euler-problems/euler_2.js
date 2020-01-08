function fibonacciSequence(numberOfTerms) {
    var returnArray = [1, 2]
    var prevPrev = 1
    var prev = 2

    for (var i = 2; i < numberOfTerms; i++) {
        var thisTerm = prevPrev + prev
        returnArray.push(thisTerm)

        prevPrev = prev
        prev = thisTerm
    }

    return returnArray
}



function fibonacciSequenceEvenValueSum(upTo) {
    var sum = 2
    var prevPrev = 1
    var prev = 2
    var thisTerm = 0

    while (thisTerm < upTo) {
        thisTerm = prevPrev + prev
        if (thisTerm % 2 == 0)
        {
            sum += thisTerm
        }

        prevPrev = prev
        prev = thisTerm
    }

    return sum
}



// Start
console.log('Euler 2')

// Example
console.log('10 terms')
console.log(fibonacciSequence(10))



// Challenge
console.log('sum up to 4 million')
console.log(fibonacciSequenceEvenValueSum(4000000))