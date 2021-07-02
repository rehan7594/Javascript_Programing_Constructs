const prompt = require('prompt-sync')();
let number = prompt('enter the number to find prime factor:');
for(let i = 2; i <= number; i++)
{
    if(number % i == 0)
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
}