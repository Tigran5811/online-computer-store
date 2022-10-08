import http from 'http';
import { userMethods } from './add-delete-user.js';

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  switch (url) {
    case '/user':
      const data = await userMethods(method, req);
      res.end(JSON.stringify(data));
      break;

    default:
      res.end(JSON.stringify({ message: 'unknown url' }));
      break;
  }
});

server.listen(3000, () => {
  console.log('server listen on localhost:3000');
});
