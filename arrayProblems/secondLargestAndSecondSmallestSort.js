let arr = new Array(10);
for(let i = 0; i < arr.length; i++)
{
    arr[i] = Math.floor(Math.random() * 900 )+100;
}
console.log(arr);
for(let i = 0; i < arr.length-1; i++)
{
    for(let j = i + 1; j < arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
console.log("second largest element in an array is "+arr[8]);
console.log("second smallest element in an array is "+arr[1]);