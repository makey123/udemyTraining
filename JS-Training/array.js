// create a variable and use square brackets
var names = ['john', 'jane', 'mark'];
var year = ['1995', '1993', '1998'];

// or do it this way
var year = new Array(1995, 1993, 1997);

console.log(year[2]);

// to change an item in an array
year[2] = 1983;
names[1] = 'sid';

console.log(year, names);

// create a mixed array
var john = ['John', 'Smith', 1990, 'Designer', false];

// push adds an element to the end of an array
john.push('blue');

// unshift adds an element at the beginning of an array
john.unshift('Mr ');

// pop removes the last element from an array
john.pop();

// shift removes the forst element from an array
john.shift();

console.log(john);

// indexOf displays the position of the element
var john.indexOf('Smith');

// Use an if statement to determine if an item is in an array. By default if an items is not in an array it will display as -1 or as a position number. As this is equal to -1 the message will be condole logged.
if(john.indexOf('teacher') === -1) {
 console.log('John is not a teacher.');   
}


