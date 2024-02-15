//higher order functions
//these are the functions that depends on the operate other fun
//higher order functions take another function as  an argument and execute the logic.
//array is an object in javascript
//array are container {0:'abc','1':'def'} --> ["abc","def"];
function fun(x,fn){
    console.log(x);
    fn();
}

fun(9,function fn(){
    console.log('hi srikrishna');
})


//map is an higher order function
//map is the higher order function available with arrays
//it returns new array.
//it takes a function as an argument
//it returns an array in which every value is ome by calling
//function f with original array element as argument

function sqr(ele){
    return ele * ele;
}

const arr = [1,2,3,4,5];

let result = arr.map(sqr);

console.log(result);


