const net = require('net');


const server = net.createServer((socket) => {
    socket.on('data',(clientData)=> {
        console.log('Data received from the client',clientData.toString());
        socket.write('Data received to server thank you');

    });
});


server.listen(8080, () => {
    console.log("New server up on port 8080");
})