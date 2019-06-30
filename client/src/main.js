import clientSocket from './socket';

//var io = require('socket.io'); 

//const clientSocket = io.connect("http://localhost:3001") ;


if (clientSocket !== undefined) {
    console.log("Connected to sockets!");
}

clientSocket.on('message',function(data){
    console.log(data.message);
 });


 
      
     

     
      
      
    