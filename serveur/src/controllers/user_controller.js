const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 12;

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
    // Cryptage du mot de passe avant insertion dans la base de données
    bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS, (err, hashedPassword) => {
        let user = new User(
            req.body.email,
            hashedPassword,
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
    });
};

const login = (req, res, next) => {
    req.db.collection('users').find({ email : req.body.email }).toArray((err, docs) => {
        if (err) {
            return next(err);
        }

        if (docs[0]) {
            // Comparaison du mot de passe saisi et du hash
            bcrypt.compare(req.body.password, docs[0].password, function(err, match) {
                if (match) {
                    res.send('User logged in successfully\n');
                } else {
                    res.status(403).send();
                }
            });
        } else {
            res.status(403).send();
        }

    });
};

module.exports = { list, register, login };
