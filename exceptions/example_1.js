let json = '{"name":"John","age":30}';

let user = JSON.parse(json); //convert the text representain to js object

//now user is an object with properties from the string

alert(user.name); //John
alert(user.age); //30
