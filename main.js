/* Variables */

var name = "potate";
// Can redefine a var variable
var name = "junk";
// Can reassign a var variable
name = "wonk";

let name = "potate";
// Can't redefine a let variable
let name = "potate, still";
// Can reassign a let variable
name = "wonk";

// Can not reassign or redefine a const variable
const name = "potate forever";

/* Converting Datatypes */

"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = "33";
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ageTwo; // 33
parseInt("5555555555 is my phone number"); // 5555555555
parseInt("foo 5555555555 is my phone number"); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0

/* String Functions */

var str = "The quick brown fox jumped over the lazy dog";

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(" again and again"); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes("quick"); // true

str.endsWith("dog"); // true

str.startsWith("Foo"); // false

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // null

"555-555-5555".match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace("fox", "wolf"); // "The quick brown wolf jumped over the lazy dog"

"555-555-5555 is my phone number".search(
    /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/
); // 0 (index where the search function finds the expression in the string)

"Hi, 555-555-5555 is my phone number".search(
    /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/
); // 4

str.indexOf("jumped"); // 20

str.lastIndexOf("jumped"); // 20

var str2 = str.concat("again and again");

str2.indexOf("again"); // 44
str2.lastIndexOf("again"); // 54

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = "    Hi there    ";

messyString.trim(); // "Hi there"

/* Operators */

2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = "100";

var convertedNum = +strNum;

convertedNum; // 100

var name = "Tiffany";

var sum = 0;

var gradeOne = 100;

var gradeTwo = 80;

sum += gradeOne; // 100

sum; // 100

sum += gradeTwo; // 180

sum *= gradeTwo; // 14400

/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

var num = 5 + (5 * 10) / 6 ** 2 - 1;
var num = (5 / 5) * 4;

/* Conditionals */

var age = 10;
var ageTwo = "12";

if (age === ageTwo) {
    console.log("They are equal");
}

if (age !== ageTwo) {
    console.log("Not equal");
}

if (age >= 25) {
    console.log("Old enough to rent a car");
}

if (age <= 10) {
    console.log("You can eat from the kid menu");
}

var age = 30;

if (age <= 10) {
    console.log("You can eat from the kid menu");
} else {
    console.log("Adult menu time for you");
}

age = 90;

if (age >= 25 && age < 80) {
    console.log("Get in, buddy!");
} else if (age < 25) {
    console.log("You are just a baby!");
} else {
    console.log("You are an old person!");
}

// We recognize that there is a hole is this code logic covering ages 11 -15. As was discussed in the lesson this does happen.
// Try playing with the code and fixing the hole in the logic for practice.
var age = 30;

if (age <= 10) {
    console.log("You can eat from the kid's menu");
    console.log("You are not old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are old enough to rent a car");
}

/* JavaScript Switch */

var dataPoint = {};

switch (typeof dataPoint) {
    case "string":
        console.log("It's a string");
        break;
    case "number":
        console.log("It's a number");
        break;
    case "boolean":
        console.log("It's a boolean");
        break;
    default:
        console.log("No matches");
}

/* Ternary Operator */

function ageVerification(age) {
    // if (age > 25) {
    //   console.log('can rent a car');
    // } else {
    //   console.log("can't rent a car");
    // }

    return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30); //?
ageVerification(10); //?

function adminControls(user) {
    // if (user) {
    //   if (user.admin) {
    //     return 'showing admin controls...';
    //   } else {
    //     return 'You need to be an admin';
    //   }
    // } else {
    //   return 'You need to be logged in';
    // }

    return user
        ? user.admin
            ? "showing admin controls"
            : "You need to be an admin"
        : "you need to be logged in";
}

const userOne = {
    name: "Kristine",
    admin: true,
};

adminControls(userOne); //?

const userTwo = null;

adminControls(userTwo); //?

const userThree = {
    name: "Tiffany",
    admin: false,
};

adminControls(userThree); //?

/* Variable Scope */

var userObj = {
    email: "sample@example.com",
    fullName: "Kristine Hudgens",
};

// Better practice if this function is the only place it needs to be used.
function dashboardGreeting() {
    var userObj = {
        email: "sample2@example.com",
        fullName: "Jordan Hudgens",
    };
    console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);

/* function declarations vs function expressions */

var greeting = function () {
    return "Hi there!";
};

var age = 4;

if (age <= 10) {
    var buildMenu = function () {
        return "Kids' Menu";
    };

    function wrongMenuBuilder() {
        return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}

/* function arguments */

function fullName(firstName, lastName, language) {
    var language = language || "English"; //ugly
    return (
        lastName.toUpperCase() +
        ", " +
        firstName.toUpperCase() +
        " - " +
        language
    );
}

console.log(fullName("Jordan", "Hudgens", "Spanish"));

function fullName(firstName, lastName, language = "English") {//cleaner and cooler
    
    return (
        lastName.toUpperCase() +
        ", " +
        firstName.toUpperCase() +
        " - " +
        language
    );
}

console.log(fullName("Jordan", "Hudgens", "Spanish"));

/* function arguments value vs. reference */

var someUser = {
  name: 'Jordan'
}

function nameFormatter (user) {
  return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
  return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
  return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"

/* Closures */

function turtleAverage() {
  let turtles = 100;
  let searches = 200;
  
  return {
    getCurrentAverage: function() {
      return (turtles/searches);
    },
    updateTurtlesAndSearches: function(turtle, search) {
      turtles += turtle;
      searches += search;
    }
  }
}

const ticet11 = turtleAverage();
console.log(ticet11.getCurrentAverage());
ticet11.updateTurtlesAndSearches(5, 15);
console.log(ticet11.getCurrentAverage());

/* Into to HTML scripting */

document.getElementsByClassName('b1')[0].innerHTML = 'Hi there';

/* using 'this' in programs */

var guide = {
  title: 'Guide to Programming',
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);

/* Adding and removing array elements */

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]

/* Loops */

var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {
    console.log(players[player]);
  }
  
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  players.forEach(function(element) {
    console.log(element);
  });

  var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }

  var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
  
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)

/* Integrating Conditionals into Strings with Ternary Operators */

const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);

/* Arrow Functions */

// Same function written as function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');

/* Arrow functions  and 'this' */

function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    // console.log(this);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();

/* Swapping variables */

let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

/* Array destructuring */

const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts);
console.log(repos);
console.log(profile);

/* Pass objects as function arguments */

const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);

/* Default object values */

const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);

/* Spread Operator */

// Combining Arrays
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);

const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);

/* Bind */

const userOne = {
  firstName: "Kristine",
  lastName: "Hudgens"
};

const userTwo = {
  firstName: "Tiffany",
  lastName: "Hudgens"
};

// Function expression
const fullName = function() {
  return `${this.lastName}, ${this.firstName}`;
};

// Nope!
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);

kristine();
tiffany();

/* compare two objects */

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

const obj2 = {
  name: "Kristine",
  age: 13,
  favorites: {
    food: "Pizza",
    vacation: "Disneyland"
  }
};

obj1 == obj2;
isEqual(obj1, obj2);