const keys = require('../../config/keys');

const locationController = {};

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCaao_a_LgrMM4LgZoJOd1NjKThOvneuKM',
    Promise: Promise
});

locationController.getGeocodeInfo = (req, res, next) => {
    console.log('req.body', req.body)
    let address = Object.keys(req.query)[0] || req.body;
    googleMapsClient.geocode({ address: address })
        .asPromise()
        .then((response) => {
            if (response.json.status === 'OK') {
                res.locals.formatted_address = response.json.results[0].formatted_address;
                res.locals.location = response.json.results[0].geometry.location;
                next();
            }
            if (response.json.status === 'ZERO_RESULTS') {
                console.log('in else', response);
                res.send({ error: 'ahhhhh this is an error'});
            }
        })
        .catch((err) => {
            res.status(500).send({ error: `ahhhhh this is an error ${err}` });
        })
};

module.exports = locationController;