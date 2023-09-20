var http = require('http');

http.createServer(function (req, res) {
  var atual = new Date();
  var publicada = atual.toLocaleDateString('pt-BR');
    
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('<h1 style="font-size: 20px;">Wellington de Oliveira do Nascimento </h1>\n<p>Data atual: ' + publicada + '</p>');
}).listen(8008);
