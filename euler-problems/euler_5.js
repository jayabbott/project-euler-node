function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while(b > 0)
    {
        var t = b;
        b = a % b;
        a = t;
    }

    return a;
}

function lcm(a, b) { 
    var result = (a * b) / gcd(a, b)
    return result
}

function lcmRange(input) {
    if (input.length == 0)
    {
        return 0
    }
    else if (input.length == 0)
    {
        return input[0]
    }
    else if (input.length == 2)
    {
        return lcm(input[0], input[1])
    }
    else
    {
        return lcm(input[0], lcmRange(input.slice(1, input.length)))
    }
}


// Start
console.log('Euler 5')

// Example
console.log('1 to 10')
console.log(lcmRange([1,2,3,4,5,6,7,8,9,10]))

// Challenge
console.log('1 to 20')
console.log(lcmRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))