const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
// const eventController = require('./controller/eventController.js')
// const locationController = require('./controller/locationController.js')

mongoose.connect(keys.mongoUri);
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongod-orm');
})

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.get('/api/search', (req, res) => {
    console.log('RESSSSSS', res)
    res.send({ express: 'Hello From Express' });
})

// app.get('/newTrip', tripController.getLocation, tripController.getWeather, tripController.addTrip, (req, res) => {
// 	res.json('yay');
// });

app.listen(PORT, () => console.log(`Listening on port ${port}`));