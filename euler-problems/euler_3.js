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

function fasterIsPrime(n) {
    if (n <= 3)
    {
        return (n > 1)
    }
    else if ((n % 2 == 0) || (n % 3 == 0))
    {
        return false
    }

    var i= 5

    while (i * i <= n)
    {
        console.log('testing i: ' + i)
        if ((n % i == 0) || (n % (i + 2) == 0))
        {
            return false
        }
        i = i + 6
    }

    return true
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
    for (var numberToCheck = Math.ceil(number / 2); numberToCheck > 1; numberToCheck--) {
        if (isFactor(number, numberToCheck))
        {
            console.log('is factor... doing fasterIsPrime on ' + numberToCheck)
            if (fasterIsPrime(numberToCheck))
            {
                console.log('Is was prime')
                return numberToCheck
            }
            console.log('Is not prime')
        }
        else
        {
            //console.log('.')
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
console.log(largestPrimeFactor(600851475143)[-1])