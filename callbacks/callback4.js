//callback problems
//1.Invesion of control
//call back hell --> readability problem



//Inversion of control

let arr = [1,10,1000,9,2,3,11];

arr.sort(function cmp(a,b){
    return a - b;
})

console.log(arr);

function doTask(fn,x){
    fn(x*x); //call back with sqaure
}

doTask(function (num){
    console.log(num);
},9);

//some body change the parent function due to this production get many problems