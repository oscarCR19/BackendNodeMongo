const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    description: String,
    state: String,
    initDate: Date,
    user:String,
    id:String
    
});

module.exports = mongoose.model('task', TaskSchema);