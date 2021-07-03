let range = 100;
let k = 0;
let arr = [];
for(let i = 0; i <= range; i++)
{
   
    if(i >= 11)
    {
        let temp = i;
        let rev = 0;
        let rem = 0;
        while(temp > 0)
        {
            rem = temp % 10;
            rev = (rev * 10) + rem;
            temp = parseInt(temp/10);
        }
        if(i == rev)
        {
            arr[k++] = i;
        }
    }
}
console.log(arr);