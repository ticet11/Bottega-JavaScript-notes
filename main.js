/* Variables */


var name = 'potate'
// Can redefine a var variable
var name = 'junk'
// Can reassign a var variable
name = 'wonk'


let name = 'potate'
// Can't redefine a let variable
let name = 'potate, still'
// Can reassign a let variable
name = 'wonk'

// Can not reassign or redefine a const variable
const name = 'potate forever'

/* Converting Datatypes */

"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ ageTwo; // 33
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0

/* String Functions */

var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54