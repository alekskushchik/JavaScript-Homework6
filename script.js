"use strict";
// Задание 1
var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var arr2 = arr.filter(function(number){
    return number > 0;
});
console.log(arr2);

var sqrtArr = arr2.map(function(number){
    return (Math.sqrt(number));
});

console.log(sqrtArr);

                            // Задание 2

var arr = [4, 3, 5, 5, 0, 4, 8, 6];

var sum = arr.reduce(function(accumulator, currentValue, index){
    if(arr.indexOf(0) == -1 || index < arr.indexOf(0)){
        return accumulator + currentValue;
    } else{
        return accumulator;
    }
}, 0);

console.log(sum);

                            // Задание 3
  
function summArguments(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
    return sum;
}
console.log(summArguments(10, 1, 2, 5));
