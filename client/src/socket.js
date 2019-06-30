import openSocket from 'socket.io-client';

const clientSocket = openSocket("http://localhost:3001");



export default clientSocket;