const express = require('express');
const router = express.Router();
const Task = require('../model/tasks');


router.post('/get', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const {user}=req.body;
    const tasks = await Task.find({user:user});
    res.json(tasks);
    
});

router.post('/add', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const task = new Task(req.body);

    await task.save();

    var response = { code: 200, status: 'Ok' };

    res.json(req.body);
});

router.post('/delete', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { id } = req.body;

    await Task.deleteOne({ _id:id })

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

router.post('/update', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { id } = req.body;
    const { state } = req.body;

    var filter = { _id: id };
    var newvalues = { $set: {  state: state } };

    await Task.updateOne(filter, newvalues);

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

module.exports = router;