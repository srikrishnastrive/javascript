const http = require('http');


const server = http.createServer((req,res) => {
    console.log("New connection was created");
    //res.end means ending the response
    if(req.url === '/home'){
        res.end("welcome home");
    }
    else {
       res.end("Something something !!");
    }
  
})

let port = 3000;

server.listen(port, () => {
    console.log("Server starting at port",port);
});