const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/weather', require('./weatherRoutes'));


module.exports = router;
