const http = require('http');
const fs = require('fs');

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
    const chunkArr = [];
    req.on('data', (chunk) => {
      chunkArr.push(chunk);
    });
    req.on('end', () => {
      const parsedData = Buffer.concat(chunkArr).toString();
      fs.writeFileSync('msg.txt', parsedData.split('=')[1]);
    });
    return res.end();
  }
  return res.end();
});

server.listen(3000);
