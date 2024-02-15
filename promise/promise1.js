function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        //for (let i = 0; i < 10000; i++){}
        let num = getRandomInt(10);
        if(num % 2 == 0){
            resolve(num);
            //fulfill state
        }
        else{
            reject(num);
            //rejected state
        }


    })
}

function cratePromiseWithTimeOut(){
    return new Promise(function executor (resolve,reject){
        setTimeout(function (){
            let num = getRandomInt(10);
            if (num % 2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },1000);
    });
}

// let y = cratePromiseWithTimeOut();
// console.log(y);


// x = createPromiseWithLoop();

// console.log(x);


function functionwithReturn ()
{
    return new Promise( function execute(resolve,reject){
        setTimeout(function () {
            let num = getRandomInt(10);

            if (num % 2 == 0){
                console.log("fullfilling");
            
                resolve(num);
                console.log("completed resolving");
                return num;
            }
            else {
                console.log("rejecting");
                reject(num);

                console.log("completed rejected")
                return num;
            }
            
        },1000);
    });
}

// let z = functionwithReturn();
// console.log(z);

//the state of the promise only change calling the resolve and reject only


//resolving again

 