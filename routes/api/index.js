const router = require('express').Router();
const imageFileRoutes = require('./imageFileRoutes');
const db = require('../../models');

router.use('/img', imageFileRoutes);

module.exports = router;