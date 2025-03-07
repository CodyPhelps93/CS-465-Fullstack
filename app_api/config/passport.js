const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/users');



passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
        },
        async(username, password, done) => {
           const q = await User
            .findOne({email : username })
            .exec();

            if(!q)
            {
                return done(null, false, {message: 'Incorrect Username'});
            }

            if(!q.validPassword(password))
            {
                return done(null, false, {message: 'Incorrect Password'});
            }

            return done(null, q);
        }
    )
);
