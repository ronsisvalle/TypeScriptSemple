//TODO 1
var me = 'Zell'
console.log(me) // Zell

//TODO 2
/*var me = 'Zell'
function sayMe () {
    console.log(me)
}
sayMe() // Zell
//TODO 3
function sayMe() {
    var me = 'Zell'
    console.log(me)
}

sayMe() // Zell
console.log(me) // Uncaught ReferenceError: me is not defined
//TODO 4
var me = 'Zell' // global scope

function sayMe () {
    var me = 'Sleepy head' // local scope
    console.log(me)
}

sayMe() // Sleepy head
console.log(me) // Zell*/

/*{
  // new scope block
}

if (true) {
  // new scope block
}

while (true) {
  // new scope block
}

function () {
  // new block scope
}*/
//TODO 5
/*
var me = 'Zell'

if (true) {
    var me = 'Sleepy head'
}

console.log(me) // 'Sleepy head'*/
//TODO 6
/*
for (var i = 1; i < 5; i++) {
    console.log(i)
    setTimeout(function () {
        console.log(i)
    }, 1000)
};
//TODO 7
function logLater (i) {
    setTimeout(function () {
        console.log(i)
    })
}

for (var i = 1; i < 5; i++) {
    console.log(i)
    logLater(i)
};
//TODO LET
var x = 1;

if(x < 10) {
	let v = 1;
	v = v + 21;
	v = v * 100;
	v = v / 8;

	console.log(v);
}

console.log(v);

for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i is not defined
*/
// //TODO ===
// var num = 0;
// var obj = new String('0');
// var str = '0';
//
// console.log(num == num); // true
// console.log(obj == obj); // true
// console.log(str == str); // true
//
// console.log(num == obj); // true
// console.log(num === str); // false
// console.log(obj == str); // true
// console.log(null == undefined); // true
//
// // both false, except in rare cases
// console.log(obj == null);
// console.log(obj == undefined);
// if (str) {
//     console.log("OK");
// }
//TODO ArrowsFunctions
/*
var somma = function (x, y) {
    return x + y;
};
var somma = (x, y) => {
    return x + y
};
() => console.log("Hello world!");
//TODO Functions Rest Parameters
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

//TODO creating an array from the messages array:
var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
var messages = ids.map(function (value) {
    return "ID is " + value // explicit return
});
var messages = ids.map(value => `ID is ${value}`); // implicit return*/
//TODO Promise
/*
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
    }, 1000);
});
promise.then(
    (dataResp) => {
        console.log("Success", dataResp);
    },
    (error) => {
        console.log("Error", error);
    }
);
promise.then(
    (dataResp) => {
        console.log("Success", dataResp);
    },
    (error) => {
        console.log("Error", error);
    }
);*/
