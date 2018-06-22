const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: {type: String, unique: true},
});

module.exports = mongoose.model('User', userSchema);

