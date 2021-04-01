const path = require('path');
const express = require('express');
require('./database');
const i18n = require('i18n')
const router = require('./routes');
const app = express();

exports.app = app;

require('./config/session.config');
require('./config/passport.config')


i18n.configure({
    locales: ['fr', 'en'],
    directory: path.join(__dirname, 'locales'),
    updateFiles: false,
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(i18n.init)
app.use(router);

app.listen(3000);