const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 10;
const jwt = require("jsonwebtoken");
const fs = require('fs');

const list = (req, res) => {
    req.db.collection('users').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const deleteUser = (req, res) => {
    req.db.collection('users').deleteOne({ email: req.params.email }, (err, user) => {
        if (err) {
            return next(err);
        }

        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(user));
    });
};

const getUserByEmail = (req, res) => {
    req.db.collection('users').findOne({ email: req.params.email }, (err, user) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(user));
    });
};

const register = (req, res, next) => {
    req.db.collection('users').find({ email : req.body.email }).toArray((err, users) => {

        if (users[0] === undefined) { // Aucun utilisateur n'utilise cet email
            /* Cryptage du mot de passe avant insertion dans la base de données */
            bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS, (err, hashedPassword) => {
                const user = new User(
                    req.body.email,
                    hashedPassword,
                    req.body.firstName,
                    req.body.lastName,
                    req.body.phone,
                    req.body.city,
                    req.body.address,
                );

                req.db.collection('users').insertOne(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    const token = jwt.sign(
                        { user },
                        'notre_cle_de_cryptage',
                        { expiresIn: '1h' }
                    );
                    res.status(200).json({
                        userData: { data: user, token: token }
                    });
                });
            });
        } else {
            res.status(401).send('User already exists');
        }
    });

};

const login = (req, res, next) => {
    // On cherche si l'utilisateur existe avant tout
    req.db.collection('users').find({ email : req.body.email }).toArray((err, docs) => {
        if (err) {
            return next(err);
        }

        let user = docs[0];
        // Si l'utilisateur (l'email) existe
        if (user) {
            // Comparaison du mot de passe saisi et du hash
            bcrypt.compare(req.body.password, user.password, function(err, match) {
                if (match) {
                    const token = jwt.sign(
                        { email: user.email, userId: user._id },
                        'notre_cle_de_cryptage',
                        {expiresIn: '1h'}
                    );
                    res.status(200).json({
                        userData: { data: user, token: token }
                    });
                } else {
                    res.status(401).send('Error');
                }
            });
        } else {
            res.status(401).send('Error');
        }

    });
};

module.exports = { list, register, login, getUserByEmail, deleteUser };
