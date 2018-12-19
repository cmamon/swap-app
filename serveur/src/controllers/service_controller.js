const Service = require('../models/service_model');

const list = (req, res) => {
    req.db.collection('services').find({}).toArray((err, docs) => {
        if (err) {
            return next(err);
        }
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(docs));
    });
};

const add = (req, res, next) => {
    let user = new Service(
        req.body.propId,
        req.body.owner,
        req.body.title,
        req.body.description,
        req.body.pictureLink,
        req.body.price
    );

    req.db.collection('services').insertOne(user, (err) => {
        if (err) {
            return next(err);
        }
        res.send('Service created successfully\n');
    });
};

const del = (req, res, next) => {
    req.db.collection('services').deleteOne(user, (err) => {
        if (err) {
            return next(err);
        }
        res.send('Service deleted successfully\n');
    });
};

const search = (req, res, next) => {
    req.db.collection('services_description').find( { 'keyword': { $in: req.body.research } } ).toArray((err, docs) => {
        let servicesList = [];
        let nbRes = docs.length;
        let nbResChecked = 0;

        res.setHeader('Content-type', 'application/json');

        for (let doc of docs) {
            req.db.collection('services').find( { 'servId': doc.servId } ).toArray((err, docs) => {
                let serv = docs[0];
		let query = {};

		if (req.body.date) {
                	query = {
                    	"propOrServId": serv.servId,
                    	"weekNumber" : req.body.date.week,
                    	"dayNumber" : req.body.date.day,
                    	"AMPM" : req.body.date.ampm
                	};
		}

                //if(date pas defaut)
                req.db.collection('availabilities').find(query).toArray((err, docs)=> {
                    if (docs[0]) {
                        servicesList.push(serv);
                    }

                    nbResChecked++;
                    if (nbResChecked == nbRes) {
                         res.end(JSON.stringify(servicesList));
                    }
                });

                /*
                else{
                    servicesList.push(serv);
                }
                */
            });
        }
    });
};

module.exports = { list, add, del, search };
