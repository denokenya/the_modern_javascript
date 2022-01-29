const multiplyES6 = (firstNumber, secondNumber) => {
  if (firstNumber > secondNumber) {
    alert("First Number is greater than Second Number");
  } else {
    alert("First Number is not greater than Second Number");
  }
  return firstNumber * secondNumber;
};

let firstNumber = Number(prompt("Enter the first number"));
let secondNumber = Number(prompt("Enter the second number"));

console.log(multiplyES6(firstNumber, secondNumber));
