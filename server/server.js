const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const keys = require('../config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
// const axios = require('axios');

const PORT = process.env.PORT || 5000;
const eventController = require('./controller/eventController.js')
const locationController = require('./controller/locationController.js')

mongoose.connect(keys.mongoUri);
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM - mongod-orm');
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-ui/public/index.html'));
})

app.get('/api/search?', locationController.getGeocodeInfo, eventController.getEventsFromEventBrite, (req, res) => {
  res.send({ data: res.locals.events })
})


// app.post('/api/updateDatabase', locationController.getGeocodeInfo, eventController.getEventsFromEventBrite, (req, res) => {
//   res.send({ data: res.locals })
// })

// function update() {
//   console.log('insideeee updateeee')
//   let address = ['Los Angeles, CA', 'New York, NY']
//   address.forEach(el => {
//     axios.post('/api/updateDatabase', { address: el }
//     ).then(function (response) {
//       console.log('response in .then', response)
//       return response.json();
//     }).then(function (json) {
//       console.log('json in .then', json)
//       // ... do something with your json ...
//       setTimeout(update, 5 * 60 * 1000); // <-- now that this call is done, 
//       //     we can program the next one
//     }).catch(function (err) {
//       // Error :(
//       setTimeout(update, 5 * 60 * 1000); // <-- there was a network problem, 
//       //     but still, program the next one!
//     });
//   })
// }

// update();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

