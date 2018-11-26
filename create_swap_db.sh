mongoimport --db SWAP --collection users --file ./src/collections/users.json --jsonArray --drop
mongoimport --db SWAP --collection properties --file ./src/collections/properties.json --jsonArray --drop
mongoimport --db SWAP --collection services --file ./src/collections/services.json --jsonArray --drop
mongoimport --db SWAP --collection availabilities --file ./src/collections/availabilities.json --jsonArray --drop
mongoimport --db SWAP --collection uses --file ./src/collections/uses.json --jsonArray --drop
mongoimport --db SWAP --collection properties_description --file ./src/collections/properties_description.json --jsonArray --drop
mongoimport --db SWAP --collection services_description --file ./src/collections/services_description.json --jsonArray --drop
