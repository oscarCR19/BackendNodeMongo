const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    email: String,
    passw: String,
    name: String,
    phone:String,
    id:String
});

module.exports = mongoose.model('user', UserSchema);