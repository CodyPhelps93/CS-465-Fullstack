const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    //console.log('Auth Header: ' + authHeader);

    if ( authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1){
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);

    if (token == null) 
    {
        console.log('Null Searer Token');
        return res.sendStatus(401);
    }

    //console.log(processs.env.JWT_SECRET);
    //console.log(jwt.decode(token));

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if(err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified;
    });
    next();
}

// define route for trips endroute
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip); //Post Method adds a trip
   

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);// UPDATE Method to update a trip
    

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

module.exports = router;