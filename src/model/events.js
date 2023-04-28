const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
    description: String,
    initDate: Date,
    user:String,
    id:String
    
});

module.exports = mongoose.model('event', eventSchema);