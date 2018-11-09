mongoimport --db SwapApp --collection members --file membres.json --jsonArray --drop
mongoimport --db SwapApp --collection properties --file properties.json --jsonArray --drop
mongoimport --db SwapApp --collection services --file services.json --jsonArray --drop
mongoimport --db SwapApp --collection availability --file availability.json --jsonArray --drop
mongoimport --db SwapApp --collection uses --file uses.json --jsonArray --drop
mongoimport --db SwapApp --collection properties_description --file properties_description.json --jsonArray --drop
mongoimport --db SwapApp --collection services_description --file services_description.json --jsonArray --drop
