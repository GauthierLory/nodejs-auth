const path = require('path');
const express = require('express');
require('./database');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const mongoose = require('mongoose');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'passphrase',
  resave: false,
  name: 'jesuisunid',
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14 // session 14 days
  },
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://gauthier:password$@cluster0.u8ukc.mongodb.net/Twitter?retryWrites=true&w=majority' })
}));

app.get('/',  (req, res) => {
  if (req.session.views) {
    req.session.views += 1;
  } else {
    req.session.views = 1;
  }
  res.render('index');
});

app.listen(3000);