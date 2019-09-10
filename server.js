// launch with command:
// node server.js

var express = require('express');
//const util = require('util'); // pour les log detaillés
var path = require('path');

var app = express();
var port = 1234;

//app.use(express.static(__dirname + '/app' ));
app.use(express.static(__dirname + '/dist/CRM'));

app.get('/', function (req, res) {
    //console.info('path: '+path.resolve();
    //console.log(util.inspect(path, false, null, true /* enable colors */))
    //console.log(util.inspect(path, {showHidden: false, depth: null}))
    //res.sendFile(path.join('./src/index.html'));
    res.sendFile(path.join(__dirname));
})

var collection = [
    { "first_name": "Tatum", "last_name": "Vernon", "email": "tvernon2@lycos.com", "gender": "Female", "company": "Youopia" },
    { "first_name": "Anet", "last_name": "Bellis", "email": "abellis1@cnn.com", "gender": "Female", "company": "Oloo" },
    { "first_name": "Pippa", "last_name": "Goymer", "email": "pgoymer2@ihg.com", "gender": "Female", "company": "Browsecat" },
    { "first_name": "Addison", "last_name": "Lawther", "email": "alawther3@walmart.com", "gender": "Male", "company": "Yoveo" },
    { "first_name": "Anya", "last_name": "Franzman", "email": "afranzman4@bravesites.com", "gender": "Female", "company": "Twitterbeat" }];
app.get('/contacts', function (req, res) {
    console.info('contacts: ' + collection);
    res.json(collection);
})


app.listen(port);
console.log('Server up and running on http://localhost:' + port);