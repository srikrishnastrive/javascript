const fs = require('fs');


fs.readFile('./readme.md','utf-8',(err,data)=>{
    if(err){  // I/O queue call back
        console.log(err);
        return;
    }
    console.log(data);
});

fs.readFile('./readme.md','utf-8',(err,data)=>{
    if(err){  // I/O queue call back
        console.log(err);
        return;
    }
    console.log(data,"fs1");
});
process.nextTick(()=> console.log("next Tick"));

Promise.resolve().then(()=> console.log("promise 1"));


setTimeout(()=> console.log("Timer 1"),0);

setImmediate(()=> console.log("Immediate call back"));

for (let i = 0; i < 100000000; i++){
    //5s

    if( i == 100000000 -1){
        console.log("for loop completed")
    }
}