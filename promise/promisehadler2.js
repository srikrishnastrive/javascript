
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function functionwithReturn ()
{
    return new Promise( function execute(resolve,reject){
        console.log("Executing the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0){
              resolve(num);   
            }
            else {
                reject(num);
            }
            
        },1000);

        console.log("Exting the constructor call back in the promise constructor")
    });
}

console.log("Starting");
const p = functionwithReturn();
console.log("we are waiting for the promise to complete");
console.log("currently my promise object is like ......",p);
p.then(function fullfillHandler1(value){
    console.log("Inside fulfill handler 1 with value",value);
    console.log("promise after fullfillment 1 is",p);

}
, function rejectionHanler1(value){
    console.log("Inside fulfill handler 1 with value", value);
    console.log("Promise after rejection 1 is",p);

});

console.log("Going to register my 2nd set of handler");
p.then(function fullfillHandler2(value){
    console.log("Inside fulfill handler 2 with value",value);
    console.log("promise after fullfillment 2 is",p);


}
, function rejectionHanler2(value){
    console.log("Inside fulfill handler 2 with value", value);
    console.log("Promise after rejection 2 is",p);


});

