const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    coordinates: String,
    password: String,
});

module.exports = mongoose.model('Event', eventSchema);

