// with inbuild function
const arr = ['Adi','Aathil','Ajay','Akil'];
arr.forEach(function newfun(num){
    console.log(num);
});


// without inbuild functions

const array = ['Adi','Aathil','Ajay','Akil','Arun'];

function newforfun(array,printer)
{
    for(let i=0; i<array.length; i++)
    {
        printer(array[i]);
    }
}
function printer(num)
{
    console.log(num);
}
newforfun(array,printer);