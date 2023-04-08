const express = require('express');
const router = express.Router();
const User = require('../model/users');

router.get('/get', async (req, res) => {
    const users = await User.find();
    res.json(users);
    
});

router.post('/add', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const user = new User(req.body);

    await user.save();

    var response = { code: 200, status: 'Ok' };

    res.json(req.body);
});

router.post('/delete', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { id } = req.body;

    await User.deleteOne({ _id: id })

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

router.post('/update', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { _id } = req.body;
    const { pwd } = req.body;
    const { name } = req.body;
    const { status } = req.body;

    var filter = { _id: _id };
    var newvalues = { $set: { name: name, pwd: pwd, status: status } };

    await User.updateOne(filter, newvalues);

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

module.exports = router;