let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
alert(user.fullName); //John Smith
user.fullName = "Alice Cooper";
alert(user.name); //Alice
alert(user.surname); //Cooper
