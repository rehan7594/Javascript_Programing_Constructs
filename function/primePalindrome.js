function primePalindrome()
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
         temp = parseInt(temp/10);
    }
    if(rev == num)
    console.log("its palindrome number");
    else
    console.log("its not a palindrome number");
    if(rev == num)
    {
        let count = 2;
        for(let i = 2; i < num; i++)
        {
            if(num % i == 0)
            count++;
        }
        if(count == 2)
        console.log("it is prime number");
        else
        console.log("it is not prime number");
    }
}
primePalindrome();