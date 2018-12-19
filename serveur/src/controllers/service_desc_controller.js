const ServiceDescription = require('../models/service_desc_model');

const list = (req, res) => {
    req.db.collection('services_description').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const add = (req, res, next) => {
    let serviceDesc = new ServiceDescription(
        req.body.servId,
        req.body.keyword,
    );

    req.db.collection('services_description').insertOne(serviceDesc, (err) => {
        if (err) {
            return next(err);
        }
        res.send('GoodDescription created successfully\n');
    });
};

module.exports = { list, add };
