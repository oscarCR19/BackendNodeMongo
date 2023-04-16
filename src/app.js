const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

app.use(cors())

app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/ToDoList')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


app.use('/users', usersRoutes);
app.use('/tasks',tasksRoutes);

app.set('port', 5000);


app.listen(app.get('port'), () => {
    console.log(`server on port 5000`);
});