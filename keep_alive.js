import http from 'http';

http.createServer(function (req, res) {
  res.write("KEKW");
  res.end()
}).listen(9000);
