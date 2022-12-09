function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
}

function power(num1, num2) {
	let pow = 1;
  for (let i = 0; i < num2; i++){
    pow *= num1;
  }
  return pow;
};

function factorial(num) {
	let fact = 1;
  if(num === 0){return fact};

  for (let i = num; i > 0; i--){
    fact *= i;
  }
  return fact
};

function addButtonEvents(){
  const numButtons = document.querySelectorAll('.number');
  numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      numInput(button.id);
    });
  });

  const opButtons = document.querySelectorAll('.operator');
  opButtons.forEach((button) => {
    button.addEventListener('click', () => {
      opInput(button.id);
    });
  });

  const equals = document.querySelector('#equals');
  equals.addEventListener('click', () => {
    calculate(inputs);
  })
  return;
}

let inputs = ["", "", ""];

function numInput(numIncoming){
  console.log(numIncoming);
}

function opInput(opIncoming){
  console.log(opIncoming)
}

function calculate(currentInputs){
  console.log(currentInputs);
}



function main(){
  
  addButtonEvents();
  return;
}

main();