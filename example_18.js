let theNumber = Number(prompt("Input the number"));

if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey why didn't you not give a number?");
}
