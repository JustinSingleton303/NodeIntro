/*index.js for node intro  code example*/

const fs = require("fs");
var superheroes = require("superheroes");
//fs.copyFileSync("a.file", "b.file");
var supervillains = require("supervillains");

var j = superheroes.random();
var k = supervillains.random();
console.log(j);
console.log(k);
