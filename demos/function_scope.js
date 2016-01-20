"use strict";

// variable and function declarations are HOISTED to the top of their scope.
var a;

function myFunc() {
}

// -- end hoisting...

a = 1;

if (true) {

//	var a;
}

function myFunc() {
}

function anotherFunc() {
  // var f; - hoisted to top of scope


  f = 3;
 
  var f=5;

  console.log(f);
}

anotherFunc();

//console.log(a);
