// Ternary Operator

// let age = 20
// let isEligibleToVote = null;

// if (age >= 18){
//     isEligibleToVote = true
// }
// else {
//     isEligibleToVote = false
// }

// console.log("is eligible to vote", isEligibleToVote)

// age < 18 
//     ? console.log("age is greater than 18") 
//     : console.log("age is smaller than 18")


// let isEligibleToVote = age >= 18 ? true : false
// console.log("is eligible to vote", isEligibleToVote)


// let marks = 40

// declare variable namely grade, and if marks is greater than equals to 90, store A, else if marks >= 80, store B, else if marks >= 70 store C, else if marks >= 60, store D, else E

// let grade;

// if (marks >= 90) grade = 'A'
// else if (marks >= 80)  grade = 'B'
// else  grade = 'C'



// let grade = marks >= 90
//     ? 'A'
//     : marks >= 80
//         ? 'B'
//         : marks >= 70
//             ? "C"
//             : marks >= 60
//                 ? "D"
//                 : "E"

// console.log("grade value", grade)

// let gender = "female"
// let title = gender === "male" ? "mister" : "miss"

// console.log('title', title)



// declaration
// initialization

// let name; // variable declaration
// name = "dakshu" // initialization

// let username = "dakshu" // declaration + initialization




// Logical 

let var1 = 5 > 8;
console.log("var1 :- ", var1)

let var2 = (7 > 2) || (7 < 2)
console.log("var2 :- ", var2)

let var3 = (7 > 2) && (7 < 2)
console.log("var3 :- ", var3)


let hours = new Date().getHours()

console.log(hours)

// hours < 12 

let greeting = hours < 12 
    ? "Good Morning"
    : hours < 16
        ? "Good Afternoon"
        : "Good Evening"

console.log("greeting", greeting)

// Booleans

// let var10 = 6 == 5

// let var10 = 6 == 5 ? false : true

let var10 = 6 == 6 ? false : true

let var11 = !(6 == 6)

console.log("var10", var10)
console.log("var11", var11)


let age = 15

if (!(age >= 18)) console.log("eligible to vote")
else console.log("not eligible to vote")


// Loops

for(let i = 100; i > 10; i++){
    console.log("dakshu", i)
}

// for(
    // declare a variable and give value to it;
    // codition --> boolean
    // operation
// ){

//     console.log("printing")
// }

// do while
// for loop
// while loop




