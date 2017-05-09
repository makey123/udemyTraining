// an object
var mary = {
    name: 'Mary',
    shoeSize: 12,
    yearOfBirth: 1983,
    isMarried: true,
    family: ['mark', 'bob', 'simon'], 
    //method
    calculateAge: function () {
       this.age = 2016 - this.yearOfBirth;
    }

}


// the method in this object creates an age property by taking a year value, minus the year of birth 

mary.calculateAge(); //apply the method to the object
console.log(mary);
