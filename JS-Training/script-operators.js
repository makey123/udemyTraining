// ################## operators ###############

var now = 2016
var age = 26
var birthYear = now - age;

birthYear = now - age * 2; //operator preceedence certain operators run left to right some run right to left 

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// The higher the preedence means that calculation will take priority 
// Resource to take preedence  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
// store 2 variables

ageJohn = 3 + 5 * 4 - 6;
// change ageJohn age variable
// the preedence of this would be 5 * 4 + 3 - 6 it will equal 18

ageJohn = (3 + 5) * 4 - 6;
// change ageJohn age variable
// the preedence of this would be 3 + 5 * 4 - 6 it will equal 26
// this is because calculations in parenthesis have a hight preedence

ageJohn++;
// change ageJohn age variable
// this increments the age of john by one year

ageMark *= 2;
// change ageMarkJohn age variable
// multiples the age of Mark by 2

console.log(ageJohn);
27
console.log(ageMark);
60