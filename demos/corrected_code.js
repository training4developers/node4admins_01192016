function Person(firstName,lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var person = new Person("super", "man");
console.dir(person, { "depth":1, "color":true });

person.firstName
person["firstName"]

person["middle-name"] = "Joy";

var a = ["a",true,3,{ id: 2}];
var b = [1,2,3];
b.push("r");

console.log(a.length);
a[2]
