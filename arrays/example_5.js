let fruits = ["Apple", "Orange", "Palm"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//replace Palm with Pear
fruits[2] = "Pear";
console.log(fruits[2]);

//add new element
fruits[3] = "Mangoes";
//show the whole array
console.log(fruits);

//total count of the array using length

console.log(fruits.length);

//pop extracts the last element of the array and returns it

console.log(fruits.pop());
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (fruit of fruits) {
  console.log(fruit);
}

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);
alert(typeof json);
alert(json);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(location.href); //show the current url

if (confirm("Go to wikipendia ?")) {
  location.href = "http://wikipedia.org"; //directs the browser to another url
}
