const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/users');


const register = async(req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message" : "All fields required"});
    }

    const existingUser = await User.findOne({email: req.body.email});

    if (existingUser) {
        return res
            .status(400)
            .json({"message": "Email already exist"});
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: ''
    });
    user.setPassword(req.body.password);
    const q = user.save();

    if(!q)
    {
        // database returned no data
        return res
            .status(400)
            .json(err);  
    } else {
        //return new user token
        const token = user.generateJwt();
        return res
            .status(200)
            .json(token);
    }
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message" : "All fields required"});
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res.status(200).json({token});
        } else {
            res.status(401).json(info);
        }
    }) (req, res);
};

module.exports = {
    register,
    login,
};