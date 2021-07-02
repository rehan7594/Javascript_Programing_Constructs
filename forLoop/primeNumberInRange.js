const prompt = require('prompt-sync')();
let range = prompt('enter the range to find prime no :');
for(let i = 2; i <= range; i++)
{
    let count = 2;
    for(let j = 2; j < i; j++)
    {
        if(i % j == 0)
        count++;
    }
    if(count == 2)
    console.log(i);
}