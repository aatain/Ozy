const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

//import controllers below ////******////// ////******////// ////******//////
const eventController = require('./controller/eventController.js')

app.get('/api/hey', (req, res) => {
    console.log('hit the home route');
    res.send({ express: 'Hello From Express' });
})

// app.get('/logout', (req, res) => {
// 	console.log('hit the logout route');
// });

// app.get('/newTrip', tripController.getLocation, tripController.getWeather, tripController.addTrip, (req, res) => {
// 	res.json('yay');
// });

// app.post('/viewChecklist', (req, res) => {
// 	console.log('hit the editSuitcase route');
// });

//listening on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;