

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

download("www.xyz.com").then(
    function downloadHandler(value){
        console.log("downloaded the data from the url",value);
        return writeFile(value);
    }
)
.then(function processWrite(value){
    console.log("data written in the file with name",value);
    return uploadingFile(value);
})

.then(function uploadingHandler(value){
    console.log("we have uploaded with",value);
})