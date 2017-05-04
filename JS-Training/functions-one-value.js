function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var johnAge = calculateAge(1990);
var sueAge = calculateAge(1934);
var mickAge = calculateAge(1981);

console.log(johnAge);

// this function passes one value to the parameter