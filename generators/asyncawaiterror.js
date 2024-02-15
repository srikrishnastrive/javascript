function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting downloading data from",url);
        setTimeout(function down(){
            console.log("Downloading in progress");
            const content = "ABCDEF";
            reject(content);//it always take the first 
            resolve(content);
            
        },1000);
    })
}





async function steps(){
    try{
        const downloadData = await download("www.xyz.com");
        return downloadData;
    }catch(error){
        console.log("we have failed the error",error);
    }finally{
        console.log("ending")
    }
   

}

console.log("starting");
steps();