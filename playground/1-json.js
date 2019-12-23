const fs = require('fs');

/*const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}*/

// stringify returns JSON representation of something
// const bookJSON = JSON.stringify(book);

// Buffer --> way to represent on binary way
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON);
data.name = 'Bernito McFinnegan';
data.planet = 'Tierra';

const newUser = JSON.stringify(data);
fs.writeFileSync('1-json.json', newUser);

console.log(data);
