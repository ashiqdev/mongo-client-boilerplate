const express = require('express');
const productRoutes = require('./product-controller');

const router = express.Router();

router.use('/', productRoutes);

module.exports = router;
