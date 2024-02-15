//parallel downloading

function download(url,time,number){
    return new Promise(function exec(resolve,reject){
        console.log("starting downloading data from",url);
        setTimeout(function down(){
            console.log("Downloading in progress",number);
            const content = "ABCDEF";

            if(time > 3000){
                resolve(content);
            }
            else{
                reject(content)
            }
            
           
        },time);
    })
}

const p1 = download("www.abc1.com",5000,1);
const p2 = download("www.abc2.com",1000,2);
const p3 = download("www.abc3.com",2000,3);

Promise.all([p1,p2,p3]).then(function fullfillHandler(value){
    console.log(value);
});