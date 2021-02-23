const passport = require('passport')

exports.sessionNew = (req, res, next) => {
    res.render('auth/signin', { error: null })
}

exports.sessionCreate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(e);
        } else if (!user) {
            res.render('auth/signin', { error: info.message })
        } else {
            req.login(user, (err) => {
                if (err) {
                    next(e)
                } else {
                    res.redirect('/');
                }
            })
        }
    })(req, res , next);
}

exports.sessionDelete = (req, res, next) => {
    req.logout();
    res.redirect('/');
}