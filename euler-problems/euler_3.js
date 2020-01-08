function isFactor(number, factor) {
    return (number % factor == 0)
}


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if (isFactor(value, i)) {
            return false;
        }
    }
    return value > 1;
}

function primeFactors(number) {
    var primeFactors = []

    for (var numberToCheck = 2; numberToCheck < number; numberToCheck++) {
        if (isFactor(number, numberToCheck))
        {
            if (isPrime(numberToCheck))
            {
                primeFactors.push(numberToCheck)
            }
        }
    }

    return primeFactors
}

function largestPrimeFactor(number) {
    for (var numberToCheck = Math.ceil(Math.sqrt(number)); numberToCheck > 1; numberToCheck--) {
        if (isFactor(number, numberToCheck))
        {
            if (isPrime(numberToCheck))
            {
                return numberToCheck
            }
        }
    }

    return 'No prime factors'
}


// Start
console.log('Euler 3')

// Example
console.log('prime factors of 13195')
console.log(primeFactors(13195))


// Challenge
console.log('largest prime factor of 600851475143')
console.log(largestPrimeFactor(600851475143))