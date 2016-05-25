// function showExponent(){

// 		var num = prompt("enter number: ", "");
// 		var exp = prompt("enter exponent: ", "");
// 		var result = 1;

// 		for (var i = 0; i < exp; i++) {
// 		  result *= num;
// 		  if (i > exp) {
// 		  	result *= num;
// 		  }
//  		}

// 		console.log(result);
// 	}

// 	showExponent();





var num = prompt("enter number: ", "");
var exp = prompt("enter exponent: ", "");

function showExponent(num, exp){

		var result;

		if (exp == 0) {
			return 1;
		} else if(exp > 0) {
			result = num * showExponent(num, exp -1);
			return result;
		} else {
			exp *= (-1);
			result = num * showExponent(num, exp -1);
			return 1 / result;
		}

	}

console.log(showExponent(num, exp));	