let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello");
};
user.sayHi(); //Hello

//arrow function
user.sayHello = () => {
  console.log(`How are you  ${user.name} ?`);
};
user.sayHello(); //How are you?



