const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

//GET: /trips - lists all the trips
//Regardless of outcome, response must include HTML status code
//and JSON message to the requiesting client

const tripsList = async(req, res) => {
    const q = await Model
    .find({}) // returns all data from db
    .exec();

    if(!q) 
    {
        return res
            .status(404)
            .json(err);
    } else{
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode}) // returns all data from db
    .exec();

    if(!q) 
    {
        return res
            .status(404)
            .json(err);
    } else{
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};