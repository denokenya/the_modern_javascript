let user = {
  name: "john",
  age: 30,
  isAdmin: true,
};
for (let key in user) {
  console.log(key); //name,age,isAdmin
  //john,30,true
  console.log(user[key]);
}
