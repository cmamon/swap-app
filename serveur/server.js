const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const https = require('https');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/SWAP';

var db;
MongoClient.connect(url, { useNewUrlParser : true }, (err, client) => {
    if (err) throw err
    db = client.db();
});

const app = express();
const availabilityRoutes = require('./src/routes/availability_routes.js');
const userRoutes = require('./src/routes/user_routes.js');
const propertyRoutes = require('./src/routes/property_routes.js');
const serviceRoutes = require('./src/routes/service_routes.js');

app.use(cors());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

// Make our db accessible to our routers
app.use((req, res, next) => {
    req.db = db;
    next();
});
app.use('/availabilities', availabilityRoutes);
app.use('/users', userRoutes);
app.use('/properties', propertyRoutes);
app.use('/services', serviceRoutes);

let port = process.env.PORT || 8888;

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
