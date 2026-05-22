// let name1 = "raj"
// let age1 = "22"

// let name2 = "ritik"
// let age2 = "18"

// let name3 = "ritu"
// let age3 = 17

// to vote, you must be atleast 18 years old

// to apply check

// to apply check, we use conditional operators, control statements
// if (){}
// else if (){}
// else {}

// let name = "dummy candidate"
// let age = 17

// let totalVotes = 0

// if (age >= 18){
//     console.log("increasing vote")
//     totalVotes++
// }
// else {
//     console.log("You are not eligible to vote")
// }

// console.log(totalVotes)

let marks = 59;
let grade = null;

// >= 90 --> A
// >= 80 --> B
// >= 70 --> C
// >= 60 --> D
// else E

// if (marks >= 90){
//     grade = "A"
// }
// else if (marks >= 80){
//     grade = "B"
// }
// else if (marks >= 70){
//     grade = "C"
// }
// else if (marks >= 60){
//     grade = "D"
// }
// else {
//     grade = "E"
// }

// console.log("grade", grade)

// if (false){
//     console.log("this is true")
// }
// else {
//     console.log("this is false")
// }

// falsy value :- 0, undefined, null, false, ""
// truthy value :- rest everything is truthy

// if (""){
//     console.log("this is true")
// }
// else if (""){
//     console.log("this is else if true")
// }
// else {
//     console.log("this is false")
// }

// Week days

// create a application, which will print shortform of a day
const day = "Fridajkfslfjdklsy";

if (day === "Sunday") console.log("Sun");
else if (day === "Monday") console.log("Mon");
else if (day === "Tuesday") console.log("Tue");
else if (day === "Wednesday") console.log("Wed");
else if (day === "Thursday") console.log("Thu");
else if (day === "Friday") console.log("Fri");
else if (day === "Saturday") console.log("Sat");
else if (day === "Sunday") console.log("Sun");
else console.log("Invalid day provided");

switch (day){
    case "Sunday": console.log("Sun")
                break;
    case "Monday": console.log("Mon")
                break;
    case "Tuesday": console.log("Tue")
                break;
    case "Wednesday": console.log("Wed")
                break;
    case "Thursday": console.log("Thu")
                break;
    case "Friday": console.log("Fri")
                break;
    case "Saturday": console.log("Sat")
                break;
    default: console.log("Invalid day provided")
}

// {
//   console.log("this is block A");
// }

// {
//   console.log("this is block B");
// }

// {
//   console.log("this is block C");
// }


const feature1 = "upto 300 users" // --> basic
const feature2 = "instant delivery" // --> moderate
const feature3 = "no delivery charge" // --> advance

const subscription = "basic"

if (subscription === "basic"){
    console.log(feature1)
}
else if (subscription === "moderate") {
    console.log(feature1)
    console.log(feature2)
}
else if (subscription === "advance"){
    console.log(feature1)
    console.log(feature2)
    console.log(feature3)
}
else {
    console.log("invalid subscription")
}

switch (subscription){
    case "advance": console.log(feature3)
    case "moderate": console.log(feature2)
    case "basic": console.log(feature1)
    break;
    default: console.log("Invalid subscription")
}