/*
FindMyPast Project : Prime Tables
Author: Roberto Popa
Date: 24th of January
Description: Multiplication table added and user input
*/

//Set up the main function
var eratosthenes = function(n) {
    //Set up variables
    var numberArray = [];
	var upperLimit = Math.sqrt(n);
	var output = [];
	var result = ' ';
	
	//Generate Numbers in the array by making the array fill with true values
    for (var i = 0; i < n+1; i++) {
        numberArray.push(true);
    }
	// Change from true to falsethe multiples of the counter meaning that only the primes are left in the array.
    for (var i = 2; i <= upperLimit; i++) {
        if (numberArray[i]) {
            for (var j = i * i; j < n+1; j += i) {
                numberArray[j] = false;
            }
        }
    }
	
	//Change the boolean values into numbers and store them in the output array
    for (var i = 2; i < n+1; i++) {
        if(numberArray[i]) {
            output.push(i);
        }
		
    }
	
	//User input the ammount of prime numbers they want
	var m = prompt("Please enter the number of primes wanted ");
	
//2 loops for the multiplication table, one for horizontal output and the other for vertical output
 for (var i = 0; i <= m; i++) {

    for (var i = 0; i <= m; i++) {

    for (var j = 0; j <= m; j++) {

        if(i == 0 && j > 0){
          result += '  |' + output[j-1] + '|';
        } 
        else if(j == 0 && i>0){
          result += '|'+ output[i-1] + '| '
		  
        } 
        else if(i>0 && j>0){
        result += (output[i-1]*output[j-1]) + '    ';
        }
		
    }
	result += '\n'
	}
 }
	//Multiplication table print
	console.log(result);
   
   
   return output;

};

//Calling the main function
console.log (eratosthenes(100000));