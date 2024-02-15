function timeConsumingByLoop(){
    console.log('loop starts');
    for (let i =0; i <= 100000000; i++ ){
        //show task
    }
    console.log('loop ends');
}

function timeConsumingByRuntimeFeature(){
    console.log("starting timer1");
    setTimeout(function exec(){
        console.log("completed the timer1");
        for (let i = 0; i < 100000000; i++){
            //some task
        }
    },5000); // 5 second timer
}

function timeConsumingByRuntimeFeature1(){
    console.log("starting timer2");
    setTimeout(function exec(){
        console.log("completed the timer2");
    },0) // 0 second timer
}

function timeConsumingByRuntimeFeature2(){
    console.log("starting timer3");
    setTimeout(function exec(){
        console.log("completed the timer3");

    },200); // 2 milli second timer.
}

console.log("hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();


console.log("ends");