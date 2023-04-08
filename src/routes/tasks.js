const express = require('express');
const router = express.Router();
const Task = require('../model/tasks');

router.get('/get', async (req, res) => {
    const tasks = await Task.find();
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

    const { _id } = req.body;

    await Task.deleteOne({ id: _id })

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

router.post('/update', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { _id } = req.body;
    const { _description } = req.body;
    const { _state } = req.body;

    var filter = { id: _id };
    var newvalues = { $set: { description:_description, state: _state } };

    await Task.updateOne(filter, newvalues);

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

module.exports = router;