// loops

// for(let i = 1; i <= 10; i++){
//     // console.log(i)

//     // if ( i % 2 === 0 ) {
//     //     console.log(i)
//     // }

//     // if ( i % 3 === 0 ) continue

//     if (i % 3 === 0){
//         console.log("value of i", i)
//         console.log("skipping rest statement")
//         continue
//     }

//     console.log(i)
// }

// let username = ["ritesh", "dakshu", "rahul", "ritik", "riya"]

// console.log(username.length)

// for(let i = 0; i < username.length; i++){

//     const name = username[i]

//     if (name === "rahul"){
//         break;
//     }

//     console.log(name)
// }

let counter = 0;
// for(let i = 0; i < 10; i++){

//     for(let j = 0; j < 10; j++){

//         for(let k = 0; k < 10; k++){
//             console.log("i = ", i, "j = ", j, "k = ", k)
//         }
//     }

// }

let userInfo = [
  ["ritesh", 22, "bca"],
  ["dakshu", 14, "9th"],
  ["rahul", 26, "CA"],
  ["ritik", 25, "MCA"],
  ["riya", 20, "BSC"],
];


for(let user of userInfo){
    for(let userData of user){
        console.log(userData)
    }
}

// for(let i = 0; i < userInfo.length; i++){
//     let user = userInfo[i]
//     // console.log("user", user)

//     for(let j = 0; j < user.length; j++){
//         console.log("user ka data", user[j])
//     }
//     // console.log(user)
// }

// console.log("counter", counter);

// console.log("outside loop");