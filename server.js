var express = require('express');
//const util = require('util'); // pour les log detaillés
var path = require('path');

var app = express();
var collection = [];
var port = 1234;

app.use(express.static(__dirname + '/dist/CRM'));

app.get('/', function (req, res) {
    //console.info('path: '+path.resolve();
    //console.log(util.inspect(path, false, null, true /* enable colors */))
    //console.log(util.inspect(path, {showHidden: false, depth: null}))
    //res.sendFile(path.join('./src/index.html'));
    res.sendFile(path.join(__dirname));
})

app.get('/contacts', function (req, res) {
    console.info('contacts: ' + collection);
    res.json(collection);
})


app.listen(port);
console.log('Server up and running on http://localhost:' + port);