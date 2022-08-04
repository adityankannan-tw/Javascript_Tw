// with inbuild function

const arr = [1,2,3,4,5];
const res = arr.reduce(function(pre,cur){
    return pre+cur;
});
console.log(res);

// without using inbuild function

const array = [1,2,3,4,5];

function Checker(num1,num2)
{
    return num1+num2;
}
function reduceFun(array,Checker)
{
    let sum =0;
    for(let i=0; i<array.length; i++)
    {
        sum = Checker(array[i],sum);
    }
    return sum;
}

const result = reduceFun(array,Checker);
console.log(result);