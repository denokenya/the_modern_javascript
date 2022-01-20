let year = prompt(
  "In which year was ECMASCRIPT-2015 specifications published?"
);

if (year < 2015) {
  alert("Too late");
} else if (year > 2015) {
  alert("Too early");
} else {
  alert("Exactly");
}
