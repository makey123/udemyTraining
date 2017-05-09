// an object
var mary = {
    name: 'Mary',
    shoeSize: 12,
    yearOfBirth: 1983,
    isMarried: true,
    family: ['mark', 'bob', 'simon'], // array

    // the following is a function inside an object, it is called a method - this example calculates the age of Mary. 
    calculateAge: function (myAge) {
        return 2016 - myAge;
    },

    //the following is also a method inside an object but instead of having to provide a value outside the object to work it relies on the values already listed inside the object. the 'this' value refers to the object name 'mary' 
    calculateAgeAgain: function () {
        return 2016 - this.yearOfBirth;
    }

}

console.log(mary); //display object array
console.log(mary.family[2]); //retrieve simon from the family array
console.log(mary.calculateAge(1923)); //apply a value to the calculateAge function to display a result
console.log(mary.calculateAgeAgain()); //value already applied within the function


//taking the method result and adding it to a variable
var age = mary.calculateAgeAgain();

//creating an item in the object called age and adding the age variable to it
mary.age = age;





// this is a variable function outside an object
var calculateAge = function (yearOfBirth) {

}
