const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// define route for trips endroute
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); //Post Method adds a trip
   

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);// UPDATE Method to update a trip
    
module.exports = router;