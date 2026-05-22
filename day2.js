
// Arithmetic Operators
    // --> +
    // --> -
    // --> *
    // --> /
    // --> %


console.log(4 + 5)
console.log(4 - 5)
console.log(4 * 5)
console.log(20 / 5) // this will give you quotient

// to remove remainder

console.log(18 % 5) // this will give you remainder

// 76 = 76

let firstname = 'ritesh'
let lastname = 'gupta'

let fullname = firstname + " " + lastname
// console.log(fullname)

let num1 = 79

// String(num1)

console.log(num1 + firstname)

console.log(firstname - lastname) // NaN --> Not a number
console.log(firstname * lastname) // NaN --> Not a number

console.log(num1 - firstname)

let num2 = 78
let num3 = 76




console.log("before", num3)
// num3 = num3 + num2
// num3 += num2

// num3 = num3 - num2
// num3 -= num2

// num3 = num3 * num2
// num3 *= num2


// num3 = num3 / num2
// num3 /= num2

// num3 = num3 % num2
// num3 %= num2

// num3 = num3 ** num2
// num3 **= num2

console.log("after", num3)

console.log(9**2)

console.log(2**3)

console.log(2**7)
// console.log("num2 > num3", num2 > num3) 
// console.log(num2 != num3)

// Comparision Operators
    // --> ==
    // --> ===
    // --> !=
    // --> !==
    // --> <
    // --> >
    // --> <=
    // --> >=


let num4 = "65"
let num5 = 65

console.log(num4 !== num5)
console.log(num4 === num5)

let num6 = 76
let num7 = 76


// console.log(num7 <= num6)

let num8 = num6 < num7
console.log("num8 value : ", num8)


// BODMAS rule

const result = 7 * 6 + 4 - 2
console.log("result", result)

const result2 = (7 + 3) + 4 * 2
console.log("result2", result2)