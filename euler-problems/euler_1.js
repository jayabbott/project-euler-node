function listMultiplesOfUnder(multipleA, multipleB, below) {
    var returnList = []
    for (var i = 1; i < below; i++)
    {
        if (i % multipleA == 0)
        {
            returnList.push(i)
        }
        else if (i % multipleB == 0)
        {
            returnList.push(i)
        }
    }
    return returnList
}

const arraySum = array => array.reduce((a,b) => a + b, 0)

// Start
console.log('Euler 1')

// Example
var exampleList = listMultiplesOfUnder(3, 5, 10)
console.log('natural numbers below 10 that are multiples of 3 or 5')
console.log(exampleList)
console.log('sum:')
console.log(arraySum(exampleList))


// Challenge
var challengeList = listMultiplesOfUnder(3, 5, 1000)
console.log('natural numbers below 1000 that are multiples of 3 or 5')
//console.log(challengeList) // We don't want to print this as it's like 400 items
console.log('sum:')
console.log(arraySum(challengeList))