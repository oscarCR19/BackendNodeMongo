const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


const usersRoutes = require('./routes/users');

app.use(express.json());
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/MusicDB')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


app.use('/users', usersRoutes);

app.set('port', 5000);

app.listen(app.get('port'), () => {
    console.log(`server on port 5000`);
});