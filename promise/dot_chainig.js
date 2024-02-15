function downloadpromise(url){
    console.log("started downloading content from",url);
    return new Promise(function exec(resolve,reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            resolve(content);
          
        })
    })
}

x = downloadpromise("www.google.com");

x
.then(function fullfillHandler(value){
    console.log("Content download is 1",value);
    return "new promise String"
    },
    function rejectionHandler(value){
        console.log("content download rejected",value);
    }
)
.then(function newfullfillHandler(value){
    console.log("value from chained the promise",value);
},
    function newRejectionHandler(value){
        console.log("value from chained the promise",value);
    }
)