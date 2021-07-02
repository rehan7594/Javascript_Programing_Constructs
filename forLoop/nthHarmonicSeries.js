const prompt = require('prompt-sync')();
let range = prompt('enter the range:');
range = Number(range);
for(let i = 1; i <= range;  i++)
{
    process.stdout.write(" 1/"+i+" +");
}