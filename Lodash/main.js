// // Times
// randomNumber = () => {
//     return Math.round(Math.random() * 100);
// };

// const sampleNumbers = _.times(5, randomNumber);

// console.log(sampleNumbers);

// // random
// randomNumber = () => {
//     return _.random(1, 100);
// }

// const sampleNumbers = _.times(5, randomNumber);

// console.log(sampleNumbers);

// // filter (added to vanilla JS)
// const players = [
//     { name: "Bregman, A", battingAverage: 0.284 },
//     { name: "Altuve, J", battingAverage: 0.346 },
//     { name: "Springer, G", battingAverage: 0.283 },
//     { name: "Gurriel, Y", battingAverage: 0.299 },
//     { name: "Gonzalez, M", battingAverage: 0.303 },
// ];

// // loops through the players list and assigns player variable to anything that fits the filter.
// const over300 = _.filter(players, player => {
//     return player.battingAverage > 0.300;
// });

// // console.log(players);
// console.log(over300);

// // keyBy
// const roster = [
//     { position: "3B", name: "Bregman, A" },
//     { position: "2B", name: "Altuve, J" },
//     { position: "CF", name: "Springer, G" },
//     { position: "1B", name: "Gurriel, Y" },
//     { position: "LF", name: "Gonzalez, M" },
// ];

// // Takes each item in the array and assigns it a key of whatever the value of the position key is.
// const positions = _.keyBy(roster, 'position');
// // 3B: { position: "3B", name: "Bregman, A" }
// // 2B: { position: "2B", name: "Altuve, J" }

// const secondBase = positions['2B'];// { position: "2B", name: "Altuve, J" }
// const thirdBase = positions['3B'];// { position: "3B", name: "Bregman, A" }

// console.log(positions);

// // reduce
// const sum = _.reduce([1, 2, 3], function(total, num) {
//     return total + num;
// }, 0)

// console.log(sum);

// const homerunStats = [
//     { name: 'Bregman, A',  hr: 19 },
//     { name: 'Altuve, J',   hr: 24 },
//     { name: 'Springer, G', hr: 34 },
//     { name: 'Gurriel, Y',  hr: 18 },
//     { name: 'Gonzalez, M', hr: 23 }
//   ];

// const totalHomeruns = _.reduce(homerunStats, (total, player) => {
//     return total + player.hr;
// }, 0);

// console.log(totalHomeruns);

const links = [
    "https://google.com",
    "https://devcamp.com",
    "https://airbnb.com"
  ];

const webLinks = _.reduce(links, (content, link) => {
    return `<a href="${link}">${link}</a>\n`.concat(content);
}, '');

console.log(webLinks);
