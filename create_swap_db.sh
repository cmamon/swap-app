mongoimport --db SWAP --collection members --file ./collections/members.json --jsonArray --drop
mongoimport --db SWAP --collection properties --file ./collections/properties.json --jsonArray --drop
mongoimport --db SWAP --collection services --file ./collections/services.json --jsonArray --drop
mongoimport --db SWAP --collection availabilities --file ./collections/availabilities.json --jsonArray --drop
mongoimport --db SWAP --collection uses --file ./collections/uses.json --jsonArray --drop
mongoimport --db SWAP --collection properties_description --file ./collections/properties_description.json --jsonArray --drop
mongoimport --db SWAP --collection services_description --file ./collections/services_description.json --jsonArray --drop
