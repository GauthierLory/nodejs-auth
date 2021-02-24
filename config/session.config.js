const session = require('express-session');
require('dotenv').config()
const MongoStore = require('connect-mongo').default;
const mongoose = require('mongoose');
const { app } = require('../app');

app.use(session({
    secret: 'cersei',
    resave: false,
    name: 'jesuisunid',
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14 // session 14 days
    },
    store: MongoStore.create({ mongoUrl: process.env.URLMongo })
    // store: new MongoStore ({
    //     mongooseConnection: mongoose.connection,
    //     ttl: 60 * 60 * 60 * 24 * 14
    // })
   }));