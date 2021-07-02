const prompt = require('prompt-sync')();
let num = prompt('enter the number :');
let count = 2;
if(num > 1){

for(let i = 2; i < num; i++)
{
    if(num % i == 0)
    count ++;
}
if(count == 2)
{
    console.log(num+" is a prime number");
}
else
console.log("it is not an prime number")
}
else
console.log("it is not prime number");