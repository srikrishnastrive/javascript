//1.write a fn to download data only use call backs
//2.write a function to save that downloaded data in a file and return the filename
//3.write a function to upload the file writtern in previous sterp to a new url

//download the content into the given url
function download (url,cb){
    //download content from the given url
    //download conttent to given callback cb
    console.log("Starting to download data from",url);
    setTimeout(function down(){
        console.log("Downloading completed");
        const content = "ABCDEF";
        cb(content);

    },4000);
}

//wtite the data into the given file

function writeFile(data,cb){
    console.log("Started writing file with",data);
    setTimeout(function write(){
        console.log("completed writig data into the file");
        const filename = "file.txt";
        cb(filename);

    },5000);
}


//upload the data from a file to a given url

function uploadingFile(url,file,cb){
    console.log("started uploading into the ",file,"on",url);
    setTimeout(function up(){
        console.log("uploaded completed");
        const response = 'SUCCESS';
        cb(response);
    },2000)
}

download("www.xyz.com",function processDownload (content){
    console.log("we are going to process the downloaded data");
    writeFile(content,function processWrite(filename){
        console.log("we have downloaded and written the file,now will write into the file");
        uploadingFile("www.upload.com",filename,function processUpload(response){
            console.log("we have uploaded the file successfully");
        });
    });
    
    
});

