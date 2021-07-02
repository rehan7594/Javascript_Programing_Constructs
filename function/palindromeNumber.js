function palindrome()
{
    const prompt = require('prompt-sync')();
    let num = prompt('enter the number')
    let temp = num;
    let rem = 0;
    let rev = 0;
    while(temp > 0)
    {
         rem = temp % 10;
         rev = (rev * 10) + rem;
         console.log(rev);
         temp =parseInt(temp/10);
    }
    if(rev == num)
    console.log("its palindrome number");
    else
    console.log("its not a palindrome number");
}
palindrome();