/*
FindMyPast Project : Prime Tables
Author: Roberto Popa
Date: 1st of February
Description: Prime number generator and multiplication table (Completed)

*/

//Set up the main function
var eratosthenes = function(n) {
    //Set up products
    var numberArray = [];
	var upperLimit = Math.sqrt(n);
	var output = [];
	var result = ' x ';
	
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

    for (var j = 0; j <= m; j++) {

      	var product = output[i-1]*output[j-1];
	   
		//Horizontal
	   if(i == 0 && j > 0){
		   if(output[j-1]<10){
				result += '      |' + output[j-1] + '|';
		   }
		   else if (output[j-1]>9 && output[j-1]<100){
				result += '     |' + output[j-1] + '|';
		   }
        } 
        
		
		//Vertical
		else if(j == 0 && i>0){
			if (i<5){
				result += '|'+ output[i-1] + '|  ';
			}
			else if (i>4 && i<100){
				result += '|'+ output[i-1] + '| ';
			}
        } 
       
	
		
		//Multiplication
	   else if(i>0 && j>0){
		   if(product < 10){ 
				result += '     ' + (product) + '   ';
		   }
		   else if(product >9 && product < 100){
			   result += '    ' + (product) + '   ';
		   }
		   else if(product >99 && product < 1000){
			   result += '   ' + (product) + '   ';
		   }
		   else if(product >999 && product < 10000){
			   result += '  ' + (product) + '   ';
		   }
		   else if(product >9999 && product < 100000){
			   result += ' ' + (product) + '   ';
		   }
		   else if(product >99999 && product < 1000000){
			   result += '' + (product) + '   ';
		   }
        }
		
    }
	result += '\n'
	}
   
	
	console.log(result);
    return output;
	
	
	
};




