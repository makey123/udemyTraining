var ageMike = 93;
var ageGeoff = 93;
var ageJack = 93;


if (ageMike > ageGeoff && ageMike > ageJack) {
    console.log("Mike\'s age " + ageMike + " is larger than Jack and Geoff\'s age");
} else if (ageGeoff > ageMike && ageGeoff > ageJack) {
    console.log("Geoff\'s age " + ageGeoff + " is larger than Jack and Mike\'s age");
} else if (ageJack > ageMike && ageJack > ageGeoff) {
    console.log("Jack\'s age " + ageJack + " is larger than Geoff and Mike\'s age");
} else console.log("It\'s a draw");
