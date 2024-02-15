function fetchUrl(url){
    return new Promise(function (resolve,reject){
        console.log("Starting downloading from",url);
        setTimeout(function processDownloading(){
            console.log("Timer completed");
            let data = "Dummy data";
            resolve(data);
            console.log("Download completed");
          
        },7000);
    });
}

console.log("start");
setTimeout(function process(){
    console.log("Timer completed");
},0);

let promiseObj = fetchUrl("ksdfsadfdsaf");
promiseObj.then(function A(value){
    console.log("value is",value);
});

console.log("end");