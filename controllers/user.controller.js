const { createUser } = require('../queries/user.queries');

exports.userNew = (req, res, next) => {
    res.render('signup');
}

exports.userCreate = async (req, res, next) => {
    try {
        const body = req.body;
        const user = await createUser(body);
        res.redirect('/');
    } catch(e) {
        res.render('signup', { error: e.message });
        // const errors = Object.keys(e.errors).map( key => e.errors[key].message );
        // res.status(400).render('signup', { errors });
    }
}