//Use objects to group together different variables in no particular order

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);

//Retrieving object properties 

//1: Using dot notation
console.log(john.lastName);

//2: using [] brackets
console.log(john['lastName']);


//Storing an object property in a variable
var xyz = 'job';
console.log(john[xyz]);


//Mutating an object property

//1: Using dot notation
john.lastName = 'Miller';

//2: using [] brackets
john['job'] = 'programmer';

console.log(john);


//Creating an object and adding properties

var jane = new Object(); // create a variable

// add properties to the object
jane.name = 'Jane';
jane.lastName = 'Smith';
jane.job = 'accountant';
jane['yearOfBirth'] = 1969;
jane['isMarried'] = true;

console.log(jane);
console.log(jane.name);
console.log(jane['lastName']);