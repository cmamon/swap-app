const Property = require('../models/property_model');

const list = (req, res) => {
    req.db.collection('properties').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const add = (req, res, next) => {
    let user = new Property(
        req.body.propId,
        req.body.owner,
        req.body.title,
        req.body.description,
        req.body.pictureLink,
        req.body.price
    );

    req.db.collection('properties').insertOne(user, (err) => {
        if (err) {
            return next(err);
        }
        res.send('Property created successfully\n');
    });
};

const del = (req, res, next) => {
    req.db.collection('properties').deleteOne(user, (err) => {
        if (err) {
            return next(err);
        }
        res.send('Property deleted successfully\n');
    });
};

const search = (req, res, next) => {
    req.db.collection('properties_description').find( { "keyword": { $in: req.body.research } } ).toArray((err, docs) => {
        let propertiesList = [];
        let nbRes = docs.length;
        let nbResChecked = 0;

        res.setHeader('Content-type', 'application/json');

        for (let doc of docs) {
            req.db.collection('properties').find( { "propId": doc.propId } ).toArray((err, docs) => {
                let prop = docs[0];
                let query = {};

                if (req.body.days) {
                    query = {
                        "propOrServId" : prop.propId,
                        "days" : {$in : req.body.days}
                    };
                }

                req.db.collection('availabilities').find(query).toArray((err, docs)=> {
                    if (docs[0]) {
                        propertiesList.push(prop);
                    }

                    nbResChecked++;
                    if (nbResChecked == nbRes) {
                         res.end(JSON.stringify(propertiesList));
                    }
                });
            });
        }
    });
};

module.exports = { list, add, del, search };
