console.log("hello world");

for(let i = 0; i < 3; i++){
    setTimeout(function exec(){
        console.log(`Timer completed ${i}`);
    },10);
}

for(let i = 0; i < 1000000; i++){
    //some task
}

console.log("End");