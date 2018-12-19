const GoodDescription = require('../models/good_desc_model');

const list = (req, res) => {
    req.db.collection('properties_description').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const add = (req, res, next) => {
    let goodDesc = new GoodDescription(
        req.body.propId,
        req.body.keyword,
    );

    req.db.collection('properties_description').insertOne(goodDesc, (err) => {
        if (err) {
            return next(err);
        }
        res.send('GoodDescription created successfully\n');
    });
};

module.exports = { list, add };
