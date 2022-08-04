// with inbuild function

const arr = [1,2,3,4,5,6,7,8,9];
const res = arr.filter(function(values){
    return values%2==1;
});
console.log(res);

//without inbuild fucntion

const array = [1,2,3,4,5,6,7,8,9];

function Checker(num){
    return num%2==1;
}
function filtermethod(array, Checker)
{
    const updatedarray = [];
    let start=0;
    for(let i=0 ; i<array.length; i++)
    {
        if(Checker(array[i]))
        {
            updatedarray[start++] = array[i];
        }
    }
    return updatedarray;
}
const result = filtermethod(array,Checker);
console.log(result);