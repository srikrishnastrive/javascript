console.log("Starts");

setTimeout(() => {
    process.nextTick(() => console.log("Next Tick setTimeOut"));
    Promise.resolve().then(()=> console.log("promise for call setTime out"));
    for (let i =0 ; i < 10000; i++){
        if(i ==10000-1 ){
            console.log("for loop ending");
        }
    }
});
setTimeout(()=> console.log("Timer 1"),0);



Promise.resolve().then(()=>console.log("promise 1"));

process.nextTick(() => console.log("Next Tick 1"));

Promise.resolve().then(()=>console.log("promise 2"));

setTimeout(()=> console.log("Timer 2"),0);

process.nextTick(() => console.log("Next Tick 2"));

for(let i = 0; i < 1000000000; i++){

}

console.log("ends");