//assignment 1
let a = 5;

console.log(a++); // 5
console.log(a);   // 6

//assignment 2
let x = 10;

console.log(++x); // 11 

//assignment 3
let num = 7;

console.log(num++); // 7
console.log(num);   // 8

//assignment 4 
let score = 15;

console.log(++score); // 16
//assignment 5
let counter = 0;

counter++;
counter++;
counter++;
counter++;
counter++;

console.log(counter); // 5

//assignment 6 
let apples = 12;

apples++;

console.log(apples); // 13

//assignment 7 

let a = 3;
let b = a++;

console.log(a);4
console.log(b);3

//assignment 8

let a = 3;
let b = ++a;

console.log(a);4
console.log(b);4

//assignment 9

let i = 1;

console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

//assignment 10 
let level = 99;

level++;

console.log(level); // 100

//assignment 11
let lives = 5;

lives--;

console.log(lives); // 4

//assignment 12

let x = 8;

console.log(x--); // 8
console.log(x);   // 7

//assignment 13
let y = 8;

console.log(--y); // 7

//assignment 14 
let i = 5;

console.log(i--);
console.log(i--);
console.log(i--);
console.log(i--);
console.log(i--);

//assignment 15

let battery = 100;

battery -= 10;

console.log(battery); // 90

//assignment 16

let a = 10;
let b = --a;

console.log(a); // 9
console.log(b); // 9

//assignment 17 

let a = 10;
let b = a--;

console.log(a); // 9
console.log(b); // 10

//assignment 18

let temperature = 40;

temperature--;
temperature--;

console.log(temperature); // 38

//assignment 19

let health = 100;

health -= 20;

console.log(health); // 80

//assignment 20

let students = 30;

students--;
students--;

console.log(students); // 28

//assignment 21

console.log(true && true); // true

//assignment 22
console.log(true && false); // false

//assignment 23
let age = 20;
let citizen = true;

console.log(age >= 18 && citizen); // true

//assignment 24
let marks = 50;
let attendance = 80;

console.log(marks >= 35 && attendance >= 75); // true

//assignment 25
console.log(10 > 5 && 7 < 3); // false

//assignment 26 
let number = 8;

console.log(number > 0 && number % 2 === 0); // true

//assignment 27
let username = "admin";
let password = "1234";

console.log(username === "admin" && password === "1234"); // true

//assingment 28
console.log(5 === 5 && 10 !== 10); // false

//assignment 29

let temperature = 28;

console.log(temperature > 20 && temperature < 35); // true

//assignment 30
let level = 55;
let coins = 1500;

console.log(level >= 50 && coins >= 1000); // true

//assignment 31
console.log(true || false); // true

//assignment 32
console.log(false || false); // false

//asignemt 33


let emailCorrect = false;
let phoneCorrect = true;

console.log(emailCorrect || phoneCorrect); // true

//assignment 34
let marks = 85;
let sportsWinner = true;

console.log(marks > 90 || sportsWinner); // true

//assignment 35

console.log(10 < 5 || 7 > 2); // true

//assignment 36 
 
let today = "Saturday";

console.log(today === "Saturday" || today === "Sunday"); // true

//assignment 37

console.log(false || true || false); // true

//assignment 38

let age = 65;

console.log(age < 12 || age > 60); // true

//assignment 39
let vipMember = false;
let score = 7000;

console.log(vipMember || score > 5000); // true

//assignment 40 
let raining = false;
let cloudy = true;

if (raining || cloudy) {
    console.log("Take an umbrella");
}