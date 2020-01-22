// Promise

const doSomething = () => {
	return Promise.resolve(1);
};

const doSomethingElse = (number) => {
	const finalNumber = number ? 1 : 2;
  
  return Promise.resolve(finalNumber);
};

const doFinally = (number) => {
	console.log(number);
};

doSomething()
	.then(() => doSomethingElse())
	.then(doFinally);

doSomething()
	.then(() => { doSomethingElse() })
	.then(doFinally);

doSomething()
	.then(doSomethingElse())
	.then(doFinally);

doSomething()
	.then(doSomethingElse)
	.then(doFinally);
  

// Scoupe

const getFunctions = () => {
	const functions = [];
  
  for (var i = 0; i < 10; i++) {
    functions.push(() => console.log(i));
  }
  
  return functions;
}

getFunctions()[0](); // ???
getFunctions()[2](); // ???
getFunctions()[4](); // ???



function () {
    var test = "Test"
}

console.log(test);



// Объекты в JS
var user = {
  name: "Вася",
  surname: "Петров"
};
user.age = 25;
for (var prop in user) console.log( prop ); // ???




var codes = {
  "7": "Россия",
  "38": "Украина",
  "1": "США"
};
for (var code in codes) console.log( code ); // ???




var codes = {
  "+7": "Россия",
  "+38": "Украина",
  "+1": "США"
};
for (var code in codes) {
  console.log( code ); // ???
}



var message = "Привет!";
var phrase = message;
phrase = "Пока";
console.log( message ); // ???
console.log( phrase ); // ???



var user = { name: 'Вася' };
var admin = user;
admin.name = 'Петя';
console.log(  user.name ); // ???



// Массивы

var arr = ["q","w","e","r","t","y"];
arr.length = 3;
console.log(arr); // ???



var arr = ["q","w","e","r","t","y"]
arr.qwer = "33";

for(var key in arr) console.log(key); // ???
for(let i = 0; i< arr.length; i++) console.log(arr[i]);  // ???



var arr = new Array(2,3)
console.log(arr[0]); // ???
var arr = new Array(2)
console.log(arr[0]); // ???




const func = (name) => {
	console.log(name);
}
func.qwerty = "qwerty";
func("qwerty"); // ???
func(func.qwerty); // ???



console.log( new Array(4).join('ля')); // ???



var arr = [1, 22, 15, 6];
arr.sort()
console.log(arr); // ???
