const Uses = require('../models/uses_model');

<<<<<<< HEAD


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

=======
>>>>>>> 9285db64a9ee7e733ff92d38139476fe54e08317
const forOneProduct = (req, res) => {
    req.db.collection('uses').find({propOrServId: req.body.prodId}).toArray((err, docs) => {
        const reponse = []
<<<<<<< HEAD
        docs.forEach(el => { 
            reponse.push({day: el.day, month: el.month, year: el.year}) 
=======
        docs.forEach(el => {
            reponse.push({day: el.day, month: el.month, year: el.year})
>>>>>>> 9285db64a9ee7e733ff92d38139476fe54e08317
        });
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(reponse));
    });
};


module.exports = { forOneProduct, book };
