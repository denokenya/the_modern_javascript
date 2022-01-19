let year = prompt(
  "In which year was ECMASCRIPT-2015 specifications pub;ished?"
);

if (year == 2015) {
  alert("You are correct");
  alert("You are smart");
} else {
  alert("You are wrong");
}

if (year < 2015) {
  alert("Too late");
} else if (year > 2015) {
  alert("Too early");
} else {
  alert("Exactly");
}
