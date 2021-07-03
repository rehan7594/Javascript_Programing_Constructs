const prompt = require('prompt-sync')();
let num = prompt("enter the number:");
let arr = [];
let k = 0;
for(let i = 2; i <= num; i++)
{
    if(num % i == 0)
    {
        let count = 2;
        for(let j = 2; j < i; j++)
        {
            if(i % j == 0)
            {
                count++;
            }
        }
        if(count == 2)
        {
            arr[k++] = i;
        }
    }
}
console.log(arr);