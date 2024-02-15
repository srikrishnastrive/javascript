// function download(url,cb){
//     console.log("started downloading url",url);
//     setTimeout(function exec(){
//         console.log("Completed downloading after 5s");
//         const content = 'ABCDEF';
//         cb(content);
//         cb(content);
//     },5000);
// }


// download("www.xyz.com",function processDownload(data){
//     console.log("downloaded data is",data);
// })

//promise with inversion control or call back it can't be guarantee the ouput
//it will not executed as expected.
//promises are the best to choose.


//promise object won't accept the call back
//it will throw onw reolve function how many times we will wrire resolve


function downloadpromise(url){
    console.log("started downloading content from",url);
    return new Promise(function exec(resolve,reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            resolve(content);
            resolve(content);
        })
    })
}

downloadpromise("www.google.com").then(function fullfillHandler(value){
    console.log("Content downloaded is",value);
})