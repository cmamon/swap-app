'use strict'
let assert = require('assert');
let bodyParser = require('body-parser');
let cors = require('cors');
let express = require('express');
let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017';
let dbName = 'SWAP';
let app = express();

let insertInCollection = function(db, col, doc) {
    db.collection(col).insertOne(doc, function(err, res) {
        if (err) {
            throw err;
        }
        console.log('1 document inserted.');
    });
};

let deleteFromCollection = function(db, col, doc) {
    db.collection(col).deleteOne(doc, function(err, res) {
        if (err) {
            throw err;
        }
        console.log('1 document deleted.');
    });
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(8888);

MongoClient.connect(url, { useNewUrlParser : true }, (err, client) => {
    let db = client.db(dbName);
    assert.equal(null, err);

    // Registration of a new member
    app.post('/src/collections/members', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'members', req.body);
    });



    app.post('/src/collections/properties', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'properties', req.body);
    });

    app.delete('/src/collections/properties/:propId', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        deleteFromCollection(db, 'properties', req.body);
    });

    app.post('/src/collections/uses', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'uses', req.body);
    });

});
