/*
FindMyPast Project : Prime Tables
Author: Roberto Popa
Date: 20th of January
Description: Setting up the Prime number generator
*/

//Set up the main function
var eratosthenes = function(n) {
    //Set up variables
	var numberArray = [];
	var upperLimit = Math.sqrt(n);
	var output = [];

	//Generate Numbers in the array by making the array fill with true values
    for (var i = 0; i < n+1; i++) {
        numberArray.push(true);
    }
	// Change from true to false the multiples of the counter meaning that only the primes are left in the array.
    for (var i = 2; i <= upperLimit; i++) {
        if (numberArray[i]) {
            for (var j = i * i; j < n+1; j += i) {
                numberArray[j] = false;
            }
        }
    }
	//Change the boolean values into numbers and store them in the output array
	for (var i = 2; i < n+1; i++) {
        if(numberArray[i] = numberArray[i]) {
            output.push(i);
        }
		
    }
	
	return output;
	
};
	console.log(eratosthenes(17));