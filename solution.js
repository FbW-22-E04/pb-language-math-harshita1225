//Q1 Minimum and maximum

//a Lowest Number 
console.log('Q1a. lowest value is ',Math.min(-1,0,1,2,3,4));
//b Highest Number
console.log('Q1b. highest value is ',Math.max(-1,0,1,2,3,4));


//Q2 Rounding
//a. Round up
console.log('Q2a. Round up each of the following numbers to the nearest integer',Math.ceil(
    3321.32321
),Math.ceil(326.76),Math.ceil(76788.7), Math.ceil(-9.78),Math.ceil(43.342));

//b. Round down

console.log('Q2a. Round down each of the following numbers to the nearest integer',Math.floor(
    3321.32321
),Math.floor(326.76),Math.floor(76788.7), Math.floor(-9.78),Math.floor(28.329));

//3. Dice Roll!
let randomNumber = Math.ceil(Math.random() * 5 + 1);
console.log(randomNumber);//random integer between 1 and 6.