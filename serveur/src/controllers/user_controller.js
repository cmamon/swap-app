const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 10;
const jwt = require("jsonwebtoken");

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
        const user = new User(
            req.body.email,
            hashedPassword,
            'TEST',
            'TEST',
            'CITY',
            'ADRESS',
            'PHONE'
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
                        {email: user.email, userId: user._id}, 
                        'notre_cle_de_cryptage', 
                        {expiresIn: '1h'}
                    );
                    //return token;
                    //res.status(200).send('User logged in successfully\n');
                    res.status(200).json({
                        token: token
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

module.exports = { list, register, login };
