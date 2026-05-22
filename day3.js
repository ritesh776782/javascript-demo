// let postLikes = 20 // 20
// console.log(postLikes = postLikes + 1) // 21
// console.log("post likes", postLikes) // 21



// postLikes = postLikes + 1
// postLikes += 1

// postLikes += 1


// postLikes += 1

// postLikes +=1

// postLikes -= 1

// postLikes += 1

// postLikes -= 1

// let postLikes = 20 // 20
// console.log(postLikes++) // 20
// console.log("post likes", postLikes) // 21

// increment operator
    // post increment operator

    // pre increment operator
// console.log(++postLikes) // 22
// console.log("post likes", postLikes) // 22

// decrement operator
    // post decrement operator
// console.log("at post decrement operator", postLikes--) // 22
// console.log("post likes value", postLikes) // 21

    // pre decrement operator
// console.log("at pre decrement operator", --postLikes) // 20
// console.log("post likes value", postLikes) // 20

// let x = 7;
// ++x; // 8
// x++; // 8
// console.log(x); // 9
//++x = 7      x++ = 8



// let n = 4;
// console.log(++n); // 5
//++n = 5


// let a = 5;
// let b = a++; // 5 
// console.log(a, b);
// a = 6       b = 5 

// let a = 5; // 5
// let b = ++a; // 6
// console.log(a, b);
// //a = 6     b = 6

// let x = 8; // 8
// let y = --x; // 7
// console.log(x, y);
// // //x=7    y = 7


// let p = 3; // 3
// console.log(p--); // 3
// console.log(p); // 2
// //p-- = 2  p = 3

// let a = 2; // 2
// let b = a++  + ++a;  // b = 2 + 4
// console.log(b);
// //a=2    b= 3+2= 5

// let x = 1;
// x = x++ + ++x; x = 1 + 3
// console.log(x); 4
// //x= 2 +1= 3

// let a = 10;
// let b = --a + a++ + ++a; // b = 9 + 9 + 11
// console.log(a, b);
// //a=10 b = 9 + 10 + 10
// b = 29, a = 11

// let n = 5;
// n++; // 5
// ++n; // 7
// n--; // 7
// console.log(n); 6
// //n=6 n=6 n=5

// let x = 3;
// let y = x-- + --x; // y = 3 + 1
// console.log(y);

// y= 2 + 2

// let a = 1;
// let b = 2;
// let c = a++ + --b + ++a; // c = 1 + 1 + 3
// console.log(c);
// c = 2 + 1 + 1



// let name = "ritesh"; name = "dakshu"

// let var1 = 2; var3 = 3

// let var1 = 1
// let var2 = 2

// let var1 = 1; var2 = 2; var3 = 3; var4 = 4; var5 = 5

// console.log(var1, var2, var3, var4, var5)


// Logical Operators

// And Operator (&&)
// Or Operator (||)
// Bitwise Operator
    // And, Or, Nor, Xor




// And Operator, operands should be boolean, result --> boolean
// both side true = true
// else false
let value1 = true && true
let value2 = true && false

let value7 = false && true
let value8 = false && false

console.log("value1", value1)
console.log("value2", value2)

true || (true && false) || true

// Or Operator, 
// if any side has true = true
// else false
let value3 = true || true || true || true
let value4 = true || false
let value5 = false || true
let value6 = false || false

console.log("value3", value3)
console.log("value4", value4)

let name = "rahul"
let gender = "male"
let age = 20
let isAdmin = gender === "male" && age > 18 // true && true
console.log("isAdmin rahul", isAdmin)


let name2 = "ritik"
let gender2 = "male"
let age2 = 17
let isAdmin2 = gender2 === "male" && age2 > 18 //  true && false
console.log("isAdmin ritik", isAdmin2)


let isRainy = true
let isSunday = false
let isHoliday = isRainy || isSunday // true || false
console.log("isHoliday", isHoliday)

isRainy = false
isSunday = false
isHoliday = isRainy || isSunday
console.log("isHoliday" ,isHoliday)

isRainy = true
isSunday = true
isHoliday = isRainy || isSunday
console.log("isHoliday", isHoliday)