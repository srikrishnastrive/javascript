
let a = 10;
Promise.resolve().then(() => console.log("printting from promise"));
process.nextTick(() => console.log("printing from nextTick"));
process.nextTick(() => console.log("printing from nextTick1"));
process.nextTick(() => console.log("printing from nextTick2"));
setTimeout(() => console.log("printing from timner"),0);

for(let i = 0 ; i < 200; i++){
    console.log(i);
}

console.log(a);