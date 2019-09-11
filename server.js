// TODO launch with command:
// node server.js
// or 
// npm start

const mongoose = require("mongoose");
// // Retrieve
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    first_name: {
        type: String,
        required: 'Enter a first name'
    },
    last_name: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    company: {
        type: String,
    }
})

var express = require('express');
const util = require('util'); // pour les log detaillés
var path = require('path');

//mongoose.Promise = global.Promise;
//WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
//(node:6620) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
//(node:2548) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect('mongodb://localhost:27017/CRMdb', { useNewUrlParser: true, useUnifiedTopology: true }/*, {useMongoClient: true}*/);



var app = express();
var port = 1234;

//app.use(express.static(__dirname + '/app' ));
app.use(express.static(__dirname + '/dist/CRM'));
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Rquested-With, Content-Type, Accept")
    next();
})


app.get('/', function (req, res) {
    //console.info('path: '+path.resolve();
    //console.log(util.inspect(path, false, null, true /* enable colors */))
    //console.log(util.inspect(path, {showHidden: false, depth: null}))
    //res.sendFile(path.join('./src/index.html'));
    // TODO uncomment to fill in database
    // Contact.create({ "first_name": "Tatum", "last_name": "Vernon", "email": "tvernon2@lycos.com", "gender": "Female", "company": "Youopia" }).catch(reason =>{console.error(raison)});
    // Contact.create({ "first_name": "Anet", "last_name": "Bellis", "email": "abellis1@cnn.com", "gender": "Female", "company": "Oloo" }).catch(reason =>{console.error(raison)});
    // Contact.create({ "first_name": "Pippa", "last_name": "Goymer", "email": "pgoymer2@ihg.com", "gender": "Female", "company": "Browsecat" }).catch(reason =>{console.error(raison)});
    // Contact.create({ "first_name": "Addison", "last_name": "Lawther", "email": "alawther3@walmart.com", "gender": "Male", "company": "Yoveo" }).catch(reason =>{console.error(raison)});
    // Contact.create({ "first_name": "Anya", "last_name": "Franzman", "email": "afranzman4@bravesites.com", "gender": "Female", "company": "Twitterbeat" }).catch(reason =>{console.error(raison)});

    res.sendFile(path.join(__dirname));
})


const Contact = mongoose.model('Contact', ContactSchema);

var collection = [];
app.get('/contacts', async function (req, res) {
    console.info('contacts: ' + collection);
    // Find all customers
    collection = await Contact.find();

    console.debug('contacts: ' + util.inspect(collection));
    res.json(collection);
})


app.listen(port);
console.log('Server up and running on http://localhost:' + port);