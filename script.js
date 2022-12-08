const add = function(num1, num2 ) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2){
    return num1 / num2;
}

const power = function(num1, num2) {
	let pow = 1;
  for (let i = 0; i < num2; i++){
    pow *= num1;
  }
  return pow;
};

const factorial = function(num) {
	let fact = 1;
  if(num === 0){return fact};

  for (let i = num; i > 0; i--){
    fact *= i;
  }
  return fact
};