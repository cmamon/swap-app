const User = require('../models/user_model');

const list = (req, res) => {
    req.db.collection('users').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const register = (req, res, next) => {
    let user = new User(
        req.body.email,
        req.body.password,
        req.body.firstName,
        req.body.lastName,
        req.body.city,
        req.body.address,
        req.body.phone
    );

    req.db.collection('users').insertOne(user, (err) => {
        if (err) {
            return next(err);
        }
        res.send('User created successfully\n');
    });
};

module.exports = { list, register };
