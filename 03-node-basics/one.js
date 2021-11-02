const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.headers);
  // console.log(req.url);
  // console.log(req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<form action="/msg" method="POST"><input name="msg"/><button type="submit">Sumbit</button></form>'
    );
    return res.end();
  }
  if (req.url === '/msg' && req.method === 'POST') {
    // console.log('kek');
    return res.end();
  }
  return res.end();
});

server.listen(3000);
