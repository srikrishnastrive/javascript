function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("Resolving the promise");
        resolve("Done");
        // reject("Fail");
    })
}

setTimeout(function process(){
    console.log("Timer completed");
},0);

let p = createPromise();
p.then(function fullHalndler(value){
    console.log("we fullfilled with a value",value);
},function rejectHandler(value){
    console.log("we rejected handler with a value",value);
});

console.log("ending");