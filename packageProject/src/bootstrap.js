import moment from 'moment';

// const birthday = moment('1993-11-25', 'YYYY-MM-DD');

// console.log(birthday.format('dddd, MMMM Do YYYY.'));

// const twoWeeksFromNow = moment().add(14, 'days');
// console.log(twoWeeksFromNow.format('MMMM Do Y'));

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.format('MMMM Do Y.'));