const Uses = require('../models/availability_model');

const forOneProduct = (req, res) => {
    req.db.collection('uses').find({propOrServId: req.body.propId}).toArray((err, docs) => {
        const reponse = []
        docs.forEach(el => {
            reponse.push({day: el.day, month: el.month, year: el.year})
        });
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(reponse));
    });
};


module.exports = { forOneProduct };
