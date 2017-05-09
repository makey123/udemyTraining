// ###### for loops #######

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i is the counter variable
// i to reach no further than 10
// i++ run again until the 9 value is reached, as soon as the condition is false and the loop ends

// create a variable to store an array
var names = ['john', 'jane', 'mary', 'mark'];

// run a for loop to list the names
for (var i = 0; i < 5; i++) {
    console.log(names[i]);
}

// run a for loop to list the names, if you don't know the numbers of elements in the array. this can be done by using the length property 
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// this loop calculates the length of the array, subtracts 1 and stores it in the variable i. It decrements backwards until the value of 0 is reached. 
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// ###### while loops #######

//first, define a counter
var i = 0;

//The while loop works the same as a for loop but with the counter defined outside the loop and the increment/decrement contained within the curly brackets
while (i < names.length) {
    console.log(names[i]);
    i++;
}


// ##### using break statments to stop a loop ####

// this can be done with an if statement 

for (i = 0; i <= 5; i++){
console.log(i);
    
    if (i === 3) {
     break;   
    }
    
}



// ##### using continue statments in a loop ####

// the if continue statement is run first. When the if statment is met, in this example the number 3 will be skipped and the loop will continue.


for (i = 0; i <= 5; i++){    
    if (i === 3) {
     continue;   
    }
    
     console.log(i);

}





