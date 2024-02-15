console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for (let i = 0; i < 10000000; i++){
    //something
}


//resolved promise

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value){
    console.log("whose promise",value);
});

setTimeout(function timer2(){
    console.log("timer 2 done");
},0);

console.log("End of the file");