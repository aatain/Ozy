// const Event = require('../models/Event');
const eventController = {};
const axios = require('axios');
const keys = require('../../config/keys');

eventController.getEventsFromEventBrite = (req, res, next) => {
    let address = res.locals.location.formatted_address;
    let lat = "" + res.locals.location.lat;
    let lng = "" + res.locals.location.lng;
    let dis = res.locals.location.dis || 25; 
    axios.get(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=${lat}&location.longitude=${lng}&location.within=${dis}km&categories=111`, {
        headers: {"Authorization": "Bearer " + keys.eventBriteAPIKey}
      })
    .then( response => {
        res.locals.events = response.data
        next();
      })
      .catch(function (error) {
        console.log(error);
      });
};

eventController.getEventsFromDatabase = (req, res, next) => {
    next();
};

module.exports = eventController;