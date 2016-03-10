#!/usr/local/bin/node

//console.log(process.argv)
var sum = 0;
var index = 2;
while (process.argv[index] != null) {
    sum = sum + Number(process.argv[index]);
    index++;
}
console.log(sum);
