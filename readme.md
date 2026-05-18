````markdown
# JavaScript Basics Notes

## Hello World

```js
console.log("hello world");
```

Used to print output in the console.

---

# Variables in JavaScript

Variables are used to store data.

## `var`

```js
var hobby = "coding";
```

### Features
- Old way of declaring variables
- Function scoped
- Can be redeclared
- Can be updated

```js
var user = "Ritesh";
var user = "Dakshu"; // allowed
```

---

## `let`

```js
let name = "Ritesh Gupta";
```

### Features
- Block scoped
- Cannot be redeclared in the same scope
- Can be updated

```js
let name = "Ritesh";
name = "Dakshu";
```

---

## `const`

```js
const age = 23;
```

### Features
- Block scoped
- Cannot be redeclared
- Cannot be updated

```js
const pi = 3.14;
```

❌ Not allowed:

```js
pi = 4;
```

---

# Naming Conventions

## Snake Case

```js
let dakshu_rakesh_yadav;
```

Uses underscore `_`

---

## Camel Case

```js
let dakshuRakeshYadav;
```

First word small, next words start with capital letter.

Most commonly used in JavaScript.

---

# Data Types in JavaScript

JavaScript has different types of data.

---

## 1. String

Used to store text.

```js
"Ritesh Gupta"
'Hello'
```

### Example

```js
let username = "ritesh7767";
```

---

## 2. Number

Used to store numbers.

```js
23
401209
```

### Example

```js
const age = 22;
```

---

## 3. BigInt

Used for very large numbers.

```js
8493758934738294738297439274832n
```

---

## 4. Boolean

Represents true or false values.

```js
true
false
```

### Example

```js
const isAdmin = true;
```

---

## 5. Object

Stores data in key-value pairs.

```js
let userInfo = {
    firstname: "ritesh",
    middlename: "laxman",
    hobby: "coding"
}
```

### Access Object Values

```js
console.log(userInfo.firstname);
```

---

## 6. Date

Used to work with date and time.

```js
let dob = new Date(2003, 4, 2, 2, 33, 51);
```

### Format

```js
new Date(year, month, day, hour, minute, second)
```

### Important

Months start from `0`

| Month | Index |
|---|---|
| January | 0 |
| February | 1 |
| March | 2 |

---

## 7. Undefined

A variable declared but not assigned a value.

```js
let username;

console.log(username);
```

Output:

```js
undefined
```

---

## 8. Null

Represents intentionally empty value.

```js
let username = null;
```

---

## 9. Symbol

Used to create unique values.

```js
const symbol = Symbol('%');
```

---

# typeof Operator

Used to check datatype of a variable.

## Example

```js
const username = "ritesh7767";
const age = 22;
const isAdmin = true;

console.log(typeof username);
console.log(typeof age);
console.log(typeof isAdmin);
console.log(typeof userInfo);
console.log(typeof symbol);
```

---

## Output

| Value | Type |
|---|---|
| `"ritesh7767"` | string |
| `22` | number |
| `true` | boolean |
| `{}` | object |
| `Symbol('%')` | symbol |

---

# Console Log

Used to print values in console.

```js
console.log("name", name);
```

---

# Important Notes

## `let` vs `const`

| Feature | let | const |
|---|---|---|
| Redeclare | ❌ | ❌ |
| Update Value | ✅ | ❌ |
| Scope | Block | Block |

---

## `var` vs `let`

| Feature | var | let |
|---|---|---|
| Scope | Function | Block |
| Redeclare | ✅ | ❌ |
| Hoisting Issues | More | Less |

---

# Example Program

```js
console.log("hello world");

let name = "Ritesh Gupta";

name = "Dakshu";

let userInfo = {
    firstname: "ritesh",
    middlename: "laxman",
    hobby: "coding"
};

const username = "ritesh7767";
const age = 22;
const isAdmin = true;

console.log(typeof username);
console.log(typeof age);
console.log(typeof isAdmin);
console.log(typeof userInfo);
```
````
