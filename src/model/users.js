const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: String,
    pwd: String,
    name: String,
    status: Boolean
});

module.exports = mongoose.model('user', UserSchema);