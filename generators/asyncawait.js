function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting downloading data from",url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        },1000);
    })
}

function writeFile(data){
    return new Promise(function write(resolve,reject){
        console.log("Started writing file with",data);
        setTimeout(function write(){
            console.log("completed writig data into the file");
            const filename = "file.txt";
            resolve(filename);
    
        },1000);
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




async function steps(){
    const downloadData = await download("www.xyz.com");
    console.log("data downloaded is",downloadData);

    const fileWritten = await writeFile(downloadData);
    console.log("file written is",fileWritten);
    const uploadResponse = await uploadingFile(fileWritten);
    console.log("upload response is",uploadResponse,"www.xyz.com");
    return uploadResponse;

}

console.log("starting");

steps().then((value) => console.log("we have completed with",value));
for (let i = 0; i < 2000; i++){

}
setTimeout(function f(){console.log("timer data")},4000);
console.log("ending");
//throw value it is used in rejecton handler for the purpose next dependency
//it thows exception to avoid undefined state