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
    app.post('/user/register', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'members', req.body);
    });

    // Property creation
    app.post('/property/add', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'properties', req.body);
    });

    // Property delete
    app.delete('/property/delete', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        deleteFromCollection(db, 'properties', req.body);
    });

    // Property reservation
    app.post('/use/reservation', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'uses', req.body);
    });

    // Service creation
    app.post('/service/add', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'properties', req.body);
    });

    // Service delete
    app.delete('/service/delete', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        deleteFromCollection(db, 'properties', req.body);
    });

    // Service reservation
    app.post('/service/reservation', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body);
        insertInCollection(db, 'uses', req.body);
    });

    // Research with keywords and date.
    app.post('/search', (req, res) => {
        db.collection("properties_description").find({"keyword": {$in: req.body.research}}).toArray((err, documents)=> {

            let propertiesList = [];
            res.setHeader("Content-type", "application/json");
            let nbResultats = documents.length;
            let numResultats = 0;
            for (let doc of documents) {
                db.collection("properties").find({"propId":doc.propId}).toArray((err, documents)=> {
                    let prop = documents[0];

                    //if(date pas defaut)
                    db.collection("availabilities").find({"propOrServId":prop.propId, 
                        "weekNumber" : req.body.date.week, "dayNumber" : req.body.date.day, "AMPM" : req.body.date.ampm}).toArray((err, documents)=> {
                            if(documents[0]) propertiesList.push(prop);
                            numResultats++;
                            if (numResultats == nbResultats) res.end(JSON.stringify(propertiesList));
                    });

                    /*
                    else{
                        propertiesList.push(prop);
                    }
                    */
                });
            }
        }); 
    });
});
