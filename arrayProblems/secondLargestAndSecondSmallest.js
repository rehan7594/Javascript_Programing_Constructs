let num1 = (Math.floor(Math.random() * 900) + 100);
let num2 = (Math.floor(Math.random() * 900) + 100);
let num3 = (Math.floor(Math.random() * 900) + 100);
let num4 = (Math.floor(Math.random() * 900) + 100);
let num5 = (Math.floor(Math.random() * 900) + 100);
let num6 = (Math.floor(Math.random() * 900) + 100);
let num7 = (Math.floor(Math.random() * 900) + 100);
let num8 = (Math.floor(Math.random() * 900) + 100);
let num9 = (Math.floor(Math.random() * 900) + 100);
let num10 = (Math.floor(Math.random() * 900) + 100);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);
let array = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
let i = 0;
for(i = 0; i < array.length-1; i++)
{
    let count = 0;
    for(let j = 0; j < array.length; j++)
    {
        if(array[i] >  array[j])
        count++;
    }
    if(count == 8)
    console.log(array[i]+" is second largest element");
    else if(count == 1)
    console.log(array[i]+" is second smallest");
}
