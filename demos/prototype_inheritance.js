"use strict";

var p = {
 amount: 5000,
 address: {
  city: "Atlanta"
 }
};

var c = Object.create(p);

p.amount = 10000;

console.log(p.amount);

c.amount = 300;

delete c.amount;

console.log(c.amount);

c.address.city = "Quebec City";
console.log(p.address.city);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var person = new Person("Super", "Man");
console.dir(person, { depth: 1, color: true });

class Person2 {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

var person = new Person2("Super", "Man");
console.dir(person, { depth: 1, color: true });

console.log(typeof Person);
console.log(typeof Person2);














