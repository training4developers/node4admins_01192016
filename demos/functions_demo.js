function myFunc(a,b,c) {

	console.log(a,b,c);
	console.log(arguments);
}

myFunc.someProperty = "My new property...";

myFunc.someFunc = function() {
	console.log("this is very crazy!");
};

myFunc(1,2,3,4);

console.log(myFunc.someProperty);

myFunc.someFunc();

