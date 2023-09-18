"use strict";
// function add (a : number, b : number) {
//     return a + b;
// }
// console.log(add(4, 2));
const hello = (name) => { return (`Hello ${name}`); };
const firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    return a + b;
}
const wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
