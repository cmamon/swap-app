const Uses = require('../models/uses_model');



const book = (req, res) => {

    let count = req.db.collection('uses').countDocuments({}).then((cmp) => {
        let uses = new Uses(
            'uses_' + cmp,
            req.body.email,
            req.body.propOrServ,
            req.body.propOrServId,
            req.body.day,
            req.body.month,
            req.body.year
        );

        req.db.collection('uses').insertOne(uses, (err) => {
            if (err) {
                return next(err);
            }
            res.send('Reservation created successfully\n');
        });
    })

    
}

const forOneProduct = (req, res) => {
    req.db.collection('uses').find({propOrServId: req.body.prodId}).toArray((err, docs) => {
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


module.exports = { forOneProduct, book };
