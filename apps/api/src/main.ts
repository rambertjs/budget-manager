import * as express from 'express';
const app = express();

app.get('/api', (_req, res) => {
  res.send('hello world');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
