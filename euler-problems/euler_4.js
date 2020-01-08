function isPalindrome(number) {
    let numberString = String(number)
    return (numberString.split("").reverse().join("") == numberString)
}

function largestPalindrome(product) {
    var largestPalindromes = 0
    
    for (var product1 = product; product1 > 0; product1--)
    {
        for (var product2 = product1; product2 > 0; product2--)
        {
            var result = product1 * product2
            if (isPalindrome(result))
            {
                if (result > largestPalindromes)
                {
                    largestPalindromes = result
                }
            }
        }
    }

    return largestPalindromes
}

// Start
console.log('Euler 4')

// Example
console.log('99')
console.log(largestPalindrome(99))



// Challenge
console.log('999')
console.log(largestPalindrome(999))

// Challenge2
console.log('9999')
console.log(largestPalindrome(9999))