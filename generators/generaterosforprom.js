function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting downloading data from",url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        },6000);
    })
}

function writeFile(data){
    return new Promise(function write(resolve,reject){
        console.log("Started writing file with",data);
        setTimeout(function write(){
            console.log("completed writig data into the file");
            const filename = "file.txt";
            resolve(filename);
    
        },5000);
    })
}

function uploadingFile(file,url){
    return new Promise(function upload(resolve,reject){
        console.log("started uploading into the ",file,"on",url);
        setTimeout(function upload(){
            console.log("uploaded completed");
            const response = 'SUCCESS';
            resolve(response);
        },2000)
    })
}


function doAfterReceiving(value){
    future = iter.next(value);
    console.log("future is",future);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}

function* steps(){
    const downloadData = yield download("www.xyz.com");
    console.log("data downloaded is",downloadData);
    const fileWritten = yield writeFile(downloadData);
    console.log("file written is",fileWritten);
    const uploadResponse = yield uploadingFile(fileWritten);
    console.log("upload response is",uploadResponse,"www.xyz.com");

}

const iter = steps();
let future = iter.next();
future.value.then(doAfterReceiving)