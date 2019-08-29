var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('************************************')
    console.info(req);
    res.writeHead(200);
    res.end('Salut tout le monde !');
    console.log('++++++++++++++++++++++++++++++++++++')
    console.warn(res);
});
server.listen(1234);