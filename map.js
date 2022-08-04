//with inbuild function

const arr = [1,2,3,4,5];
let result = arr.map(function newFun(value){
    return value*2;
});
console.log(result);


//without inbuild function

const mapNoInbuildFunction = [1,2,3,4,5];

function mapFun(mapNoInbuildFunction,number){
    let res=[];
    for(let i=0; i<mapNoInbuildFunction.length;i++)
    {
        res[i] = number(mapNoInbuildFunction[i]);
    }
    return res;
}

function multiplyByTwo(numbers)
{
    let n=0;
    n=numbers*2;
    return n;
}

const mapresult = mapFun(mapNoInbuildFunction,multiplyByTwo);
console.log(mapresult);



