function timeConsumingByLoop(){
    console.log('loop starts');
    for (let i =0; i <= 100000000; i++ ){
        //show task
    }
    console.log('loop ends');
}

function timeConsumingByRuntimeFeature(){
    console.log("starting timer");
    setTimeout(function exec(){
        console.log("completed the timer")
    },10);
}

console.log("hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();

timeConsumingByLoop();
timeConsumingByRuntimeFeature();

console.log("ends");