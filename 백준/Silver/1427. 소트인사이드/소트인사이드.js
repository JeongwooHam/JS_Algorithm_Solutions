const input = require("fs").readFileSync("/dev/stdin", "utf8");

console.log( input.split("").sort((a, b) => b - a).join(""));

