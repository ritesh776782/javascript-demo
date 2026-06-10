// loops
    // --> for loop
    // --> while loop
    // --> do while loop
    
    // forEach
    // map
    // reduce
    // for of
    // for in 

// for loop

// for(
//     let x = 0;
//     x < 10;
//     x++
// ){
//     console.log("x", x)
// }

// for(let x = 0; x < 10; x++){
//     console.log("x",x)
// }


// while loop
// let x = 0
// while (x < 10){
//     console.log("x", x)
//     x++;
// }


// do while loop
// let x = 0
// do {
//     console.log("inside do while loop", x)
// } while (x < 0)

let userinfo = {
    name: "ritesh",
    qualification: "bca",
    age: 23
}

// let username = ["ritesh", "dakshu", "dona", "rahul", [["ritesh"]], true, 1, userinfo]

let username = ["ritesh", "rahul", "dakshu", "rahul", "ritik", "vivek", "yogesh", "deepak", "swapnil", "pawan", "pooja"]


console.log(username.length)
// console.log(username[0])
// console.log(username[1])
// console.log(username[2])
// console.log(username[3])
// console.log(username[14])

for(let x = 0; x < username.length; x++){
    if (x % 2 === 1){
        console.log(username[x])
    }
}

// for(let x = 0; x < username.length; x++){
//     console.log("user", username[x], x)
// }

// let x = 0
// while (x < username.length){
//     console.log(username[x])
//     x++
// }

// do {
//     console.log(username[x])
//     x++
// } while (x < username.length)

console.log(20 / 5) // 4
// console.log(27878542 % 2) 

// for(let x = 1; x <= 10; x++){
//     for(let y = 0; y <= 10; y++){
//         console.log(x + " * " + y + " = " + x * y)
//     }
// }

// for(let x = 0; x < 20; x++){
//     let str = ""
//     for(let y = 0; y < x; y++){
//         str += " * "
//     }
//     console.log(str)
// }

