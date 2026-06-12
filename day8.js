// we have to store information of a user, 
// name, age, hobbie, gender
// let username = "ritesh"

let userInfo = {
    fullname: "Rahul",
    age: 22,
    hobbie: "coding",
    gender: "male",
    qualification: {
        secondaryHigherEducation: 12,
        stream: "Science"
    },
    language: ["Python", "Javascript", "Java"],
    isStudent: false,
    "designation": "software developer",
    7878: false,
    true: true,
    name: "dakshu"
}

const gender = userInfo.gender

userInfo.gender = "female"
userInfo.fullname = "Ritik"
userInfo.address = "vasai"

console.log(gender)
console.log(userInfo)



// for in loop

// for(let key in userInfo){
//     console.log(key, userInfo[key])
// }

// console.log(userInfo["hobbie"])
// console.log(userInfo.age)    

// const keyArr = Object.keys(userInfo)
// console.log(keyArr)
// console.log(keyArr.length)


// const valueArr = Object.values(userInfo)
// console.log(valueArr)
// console.log(valueArr.length)

// console.log(Object.keys(userInfo).length)
// console.log(Object.values(userInfo))

let username = ["ritesh", "dakshu", "ayush", "rahul"]

// for of loop

// for(let user of username){
//     console.log(user)
// }


// username[0]

// for(let i = 0; i < username.length; i++){
//     console.log(username[i])
// }

// let name = "vivek";

// let arr = ['v','i','v','e','k']

// console.log(name.length)



// console.log(userInfo.length)
