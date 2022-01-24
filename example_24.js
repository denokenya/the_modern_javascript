switch (prompt("What is the whether like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella");
    break;
  case "sunny":
    console.log("Dress lightly");
  case "cloudy":
    console.log("Go outside");
    break;
  default:
    console.log("Unkwown weather type!");
    break;
}
