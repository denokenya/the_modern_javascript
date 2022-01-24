let user = {
  name: "John",
  surName: "Smith",
};
user.age = 25; //adds one more

for (prop in user) {
  console.log(prop, user[prop]);
}
