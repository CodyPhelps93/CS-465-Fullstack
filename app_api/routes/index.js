const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// define route for trips endroute
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
    
module.exports = router;