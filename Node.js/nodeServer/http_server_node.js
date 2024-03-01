const http = require('http');


const server = http.createServer((req,res) => {
    console.log("New connection was created");
})

let port = 3000;

server.listen(port, () => {
    console.log("Server starting at port",port);
});