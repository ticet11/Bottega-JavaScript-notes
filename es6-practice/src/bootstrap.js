import classChallenge, {name, summer} from './classChallenge'

console.log(classChallenge(), name(), summer(5, 7));

// Create 3 functions that compute the sum of the numbers in an array.abs

// for-loop, Regular Function
function sumList(numbersList) {
    let sum = 0;
    numbersList.forEach((number) => {
        sum = sum += number;
    });
    return sum;
}

console.log(sumList([1, 2, 3]));

// while loop, Arrow Function
const arrowSum = (numbersList) => {
    let i = 0;
    let sum = 0;
    while (i < numbersList.length) {
        sum += numbersList[i];
        i++;
    }
    return sum;
};
console.log(sumList([1, 2, 3]));

// do while loop, Anonymous Function
const expressionSum = function (numbersList) {
    let i = 0;
    let sum = 0;
    do {
        sum += numbersList[i];
        i++;
    } while (i < numbersList.length);
    return sum;
};

console.log(sumList([1, 2, 3]));
