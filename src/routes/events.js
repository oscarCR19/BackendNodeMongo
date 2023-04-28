const express = require('express');
const router = express.Router();
const Event = require('../model/events');


router.post('/get', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const {user}=req.body;
    const events = await Event.find({user:"6431078fb5880a67309f6f2f"});
    res.json(events);
   
    
});

router.post('/add', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const event = new Event(req.body);

    await event.save();

    var response = { code: 200, status: 'Ok' };

    res.json(req.body);
});

router.post('/delete', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const { id } = req.body;

    await Event.deleteOne({ _id:id })

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

    await Event.updateOne(filter, newvalues);

    var response = { code: 200, status: 'Ok' };

    res.json(response);
});

module.exports = router;