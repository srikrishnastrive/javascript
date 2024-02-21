Promise.resolve().then(() => console.log("printting from promise"));
process.nextTick(() => console.log("printing from nextTick"));
setTimeout(() => console.log("printing from timner"),0);