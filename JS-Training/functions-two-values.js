function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var johnAge = calculateAge(1990);
var sueAge = calculateAge(1934);
var mickAge = calculateAge(1981);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 67 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired');
    }
}

yearsUntilRetirement('Andy', 1974);
yearsUntilRetirement('Mike', 1963);
yearsUntilRetirement('Mary', 1948);

// We already have the function to work out the year of birth 
// the second function works out the year of retirement
// 1. the name string and year variables are passed into the parameter
// 2. create a variable called age to carry across the caculateAge function and apply the year
// 3. create another variable called retirement that subtracts the above age variable from 65
// 4. create an if statement to console.log two different messages depending on if the person has retired or not
