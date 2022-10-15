import http from 'http';
import app from './src/api/app.js';

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listen on localhost:3000');
});

// {
//   "userName" : "Tigran5811",
//   "firstName" :"Tigran",
//   "lastName" : "Bayramyan",
//   "age": 28,
//   "password": "5s4d9q98"
//   }
