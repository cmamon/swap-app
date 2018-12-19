const Availability = require('../models/availability_model');

const list = (req, res) => {
    req.db.collection('availabilities').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const add = (req, res, next) => {
    let ava = new Availability(
        req.body.availabilityId,
        req.body.propOrServ,
        req.body.propOrServId,
        req.body.days,
    );

    req.db.collection('availabilities').insertOne(ava, (err) => {
        if (err) {
            return next(err);
        }
        res.send('Availability created successfully\n');
    });
};

const forOneProduct = (req, res) => {
    req.db.collection('availabilities').find({propOrServId: req.body.prodId}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs[0].days));
    });
};

module.exports = { list, add, forOneProduct };
