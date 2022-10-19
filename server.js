import http from 'http';
import app from './src/api/app.js';

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listen on localhost:3000');
});
