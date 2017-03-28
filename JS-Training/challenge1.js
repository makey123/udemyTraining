var nameOne = "Jack";
var nameTwo = "Simon";
var nameThree = "Sue";
var heightOne = 120;
var heightTwo = 120;
var heightThree = 120;
var jackHeight = heightOne * 5;
var simonHeight = heightTwo * 5;
var sueHeight = heightThree * 5;

if (sueHeight > simonHeight && jackHeight) {
    console.log(nameThree + " is the winnner, the height is " + sueHeight + "cms");
}else if (jackHeight > sueHeight && simonHeight){
    console.log(nameOne + " is the winnner, the height is " + jackHeight + "cms");
}else if (simonHeight > sueHeight && jackHeight){
     console.log(nameTwo + " is the winnner, the height is " + simonHeight + "cms");
}else
    console.log("All heights are the same");
