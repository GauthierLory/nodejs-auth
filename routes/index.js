const router = require('express').Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
// const i18n = require('i18n');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/',  (req, res) => {
    // i18n.setLocale(req, req.params.lang)
    res.render('index', { user: req.user });
  });

module.exports = router;