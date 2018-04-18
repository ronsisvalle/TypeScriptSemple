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
//TODO creating an array from the messages array:
var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
var messages = ids.map(function (value) {
    return "ID is " + value // explicit return
});
var messages = ids.map(value => `ID is ${value}`); // implicit return*/
