
var age = 32;
if (age > 20 && age < 30){
    console.log("John is a young man");
}else if (age > 31 && age < 60){
    console.log("john is and adult under 60");
}
else {
    console.log("John is over 30");
}


// in the example above the && statement is used, the answer will be true on both counts based on the age variable of 32

var job ='teacher';

job = prompt("what does John do?");

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab.');
        break;
    case 'policeman':
        console.log('John is a policeman.');
        break;
    default:
        console.log('John does something else.');
}

// the above is another way of writing the if/else statement.
// a variable of teacher is set then a pop up box is generated to ask a question.
//when the answer is submitted  if one of the following cases match then the corresponding result is displayed. Or the default result is displayed.