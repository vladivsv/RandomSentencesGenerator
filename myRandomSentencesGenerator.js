const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let names = ["Peter", "Michell", "Jane", "Steve"];
let places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
let verbs = ["eats", "holds", "sees", "plays with", "brings"];
let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
let details = ["near the river", "at home", "in the park"];

let randomNames = getRandomWord(names);
let randomPlaces = getRandomWord(places);
let randomVerbs = getRandomWord(verbs);
let randomNouns = getRandomWord(nouns);
let randomAdverbs = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);

let who = `${randomNames} from ${randomPlaces}`;
let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;
let sentence = `${who} ${action} ${randomDetails}`;

console.log('Hello, this is your first random-generated sentence');
console.log(sentence);

let recursiveAsyncReadLine = function () {
    readline.question('Click [Enret] to generate a new one', string => {
    })
}
function getRandomWord(arrey) {
    let word = arrey[Math.floor(Math.random() * arrey.length)];
    return word;
}